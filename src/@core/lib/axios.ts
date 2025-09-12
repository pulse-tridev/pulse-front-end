import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { SessionService } from "src/features/auth/services/session.service";

// Função para detectar se estamos no servidor
const isServer = typeof window === "undefined";

// Base URL compatível com ambientes com/sem prefixo NEXT_PUBLIC
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.API_BASE_URL ||
  "http://localhost:3001";

// Clientes Axios
const axiosJwt = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // enviar cookies HttpOnly
});

export const axiosRefresh = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // enviar cookies HttpOnly
});

// Estado de controle do fluxo de refresh
let isRefreshing = false;
let pendingRequestsQueue: Array<{
  resolve: () => void;
  reject: (error: unknown) => void;
}> = [];

// Interceptor de request: sem Authorization; cookies HttpOnly cuidam
axiosJwt.interceptors.request.use((config) => config);

// axiosRefresh: sem Authorization; cookies HttpOnly cuidam
axiosRefresh.interceptors.request.use((config) => config);

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
      if (!isServer) {
        try {
          await SessionService.clearSessionFlag();
        } catch (_) {}
      }
      return Promise.reject(normalizeAxiosError(error));
    }

    originalRequest._retry = true;

    // Caso já exista um refresh em andamento, enfileira até que ele conclua
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingRequestsQueue.push({
          resolve: () => {
            resolve(axiosJwt(originalRequest));
          },
          reject,
        });
      });
    }

    // Dispara o refresh
    isRefreshing = true;
    try {
      // Dispara refresh; backend usa cookies HttpOnly e retorna 200
      await axiosRefresh.post("/auth/refresh");

      // Reprocessa fila pendente
      pendingRequestsQueue.forEach(({ resolve }) => resolve());
      pendingRequestsQueue = [];

      // Reexecuta request original
      return axiosJwt(originalRequest);
    } catch (refreshError) {
      // Falha no refresh: rejeita toda a fila e faz logout
      pendingRequestsQueue.forEach(({ reject }) => reject(refreshError));
      pendingRequestsQueue = [];
      if (!isServer) {
        try {
          await SessionService.clearSessionFlag();
        } catch (_) {}
      }
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
