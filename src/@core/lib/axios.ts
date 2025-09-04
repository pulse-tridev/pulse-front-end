import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import { useAuthStore } from "../../features/auth/store/auth.store";
import { useUserStore } from "src/features/auth/store/user.store";
import { SessionService } from "src/features/auth/services/session.service";

const logout = useAuthStore.getState().logout;
const clearUser = useUserStore.getState().clearUser;

// Base URL compatível com ambientes com/sem prefixo NEXT_PUBLIC
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;

// Clientes Axios
const axiosJwt = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const axiosRefresh = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
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

// axiosRefresh: injeta Authorization com o refreshToken
axiosRefresh.interceptors.request.use((config) => {
  const { refreshToken } = useAuthStore.getState();
  setAuthHeader(config as InternalAxiosRequestConfig, refreshToken);
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
      // Nesses casos, encerra a sessão e rejeita (token inválido/expirado definitivamente)
      try {
        await SessionService.clearSession({ clearSessionFlag: true });
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
      // Garante que temos refreshToken para tentar o refresh
      const { refreshToken } = useAuthStore.getState();
      if (!refreshToken) {
        throw new Error("Sem refresh token disponível");
      }

      // Chama diretamente o backend com Authorization: Bearer <refreshToken>
      const { data } = await axiosRefresh.post("/auth/refresh");
      const newAccessToken = (data as any)?.accessToken as string | undefined;
      const newRefreshToken = (data as any)?.refreshToken as string | undefined;

      if (!newAccessToken) {
        throw new Error("Refresh token inválido");
      }

      // Atualiza stores de sessão (tokens e usuário)
      await SessionService.applyTokens({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
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
        await SessionService.clearSession({ clearSessionFlag: true });
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
