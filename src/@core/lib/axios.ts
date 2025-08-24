import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import { useAuthStore } from "../../features/auth/store/auth.store";

// Base URL compatível com ambientes com/sem prefixo NEXT_PUBLIC
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;

// Clientes Axios
const axiosJwt = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosRefresh = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Estado de controle do fluxo de refresh
let isRefreshing = false;
let pendingRequestsQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

function setAuthHeader(
  config: InternalAxiosRequestConfig,
  token: string | null
) {
  if (!config.headers) config.headers = new AxiosHeaders();
  const headers = config.headers as AxiosHeaders;
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  } else {
    headers.delete("Authorization");
  }
}

// Interceptor de request: sempre injeta Authorization se existir
axiosJwt.interceptors.request.use((config) => {
  const url = (config.url || "").toString();
  const isAuthEndpoint =
    url.includes("/auth/login") || url.includes("/auth/refresh");
  if (isAuthEndpoint) return config; // não injeta Authorization nesses endpoints

  const { accessToken } = useAuthStore.getState();
  setAuthHeader(config, accessToken);
  return config;
});

// Tratamento padrão de erro (mensagem vinda do backend)
function normalizeAxiosError(error: any) {
  const message =
    error?.response?.data?.message || error?.message || "Erro inesperado";
  return new Error(message);
}

// Interceptor de resposta com fluxo de refresh e fila para requisições concorrentes
axiosJwt.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    const status = error.response?.status;

    // Se não for 401, apenas propaga o erro normalizado
    if (status !== 401 || !originalRequest) {
      return Promise.reject(normalizeAxiosError(error));
    }

    // Evita loop em endpoints de auth/refresh e múltiplas tentativas
    const requestUrl = (originalRequest.url || "").toString();
    const isRefreshEndpoint = requestUrl.includes("/auth/refresh");
    const isLoginEndpoint = requestUrl.includes("/auth/login");
    if (isRefreshEndpoint || isLoginEndpoint || originalRequest._retry) {
      // Nesses casos, faz logout e rejeita (token inválido/expirado definitivamente)
      try {
        useAuthStore.getState().logout();
      } catch (_) {}
      return Promise.reject(normalizeAxiosError(error));
    }

    originalRequest._retry = true;

    // Caso já exista um refresh em andamento, enfileira até que ele conclua
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingRequestsQueue.push({
          resolve: (newToken: string) => {
            setAuthHeader(originalRequest, newToken);
            resolve(axiosJwt(originalRequest));
          },
          reject,
        });
      });
    }

    // Dispara o refresh
    isRefreshing = true;
    try {
      const { data } = await axiosRefresh.post("/auth/refresh");
      const newAccessToken = (data as any)?.accessToken as string | undefined;

      if (!newAccessToken) {
        throw new Error("Refresh token inválido");
      }

      // Atualiza store e header do request original
      useAuthStore.getState().setAccessToken(newAccessToken);
      setAuthHeader(originalRequest, newAccessToken);

      // Reprocessa fila pendente
      pendingRequestsQueue.forEach(({ resolve }) => resolve(newAccessToken));
      pendingRequestsQueue = [];

      // Reexecuta request original
      return axiosJwt(originalRequest);
    } catch (refreshError) {
      // Falha no refresh: rejeita toda a fila e faz logout
      pendingRequestsQueue.forEach(({ reject }) => reject(refreshError));
      pendingRequestsQueue = [];
      try {
        useAuthStore.getState().logout();
      } catch (_) {}
      return Promise.reject(normalizeAxiosError(refreshError));
    } finally {
      isRefreshing = false;
    }
  }
);

// Cliente de refresh também normaliza mensagens de erro
axiosRefresh.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeAxiosError(error))
);

export default axiosJwt;
