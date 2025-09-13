import axios from "axios";
import type { AuthUser } from "./types";

/**
 * Padrão de arquitetura (Auth):
 * - Leitura remota ("quem é o usuário?") via React Query: fonte da verdade e deduplicação.
 * - Ações (login/logout/refresh) em hook separado (useAuthActions) que apenas
 *   invalidam/prefetch do cache; não fazem leitura direta aqui.
 * - Componentes públicos NUNCA usam useAuth (leitura); usam apenas useAuthActions.
 * - Componentes privados usam useAuth, garantindo que /api/auth/me só rode em rotas privadas.
 * - A query tem staleTime alto e refetch desabilitado em mount/focus/reconnect para evitar
 *   re-fetchs automáticos. Revalidações são explícitas via actions.
 */

// Chaves de cache para Auth
export const authKeys = {
  root: ["auth"] as const,
  me: ["auth", "me"] as const,
};

export interface AuthApi {
  getMe: () => Promise<AuthUser | null>;
}

// Implementação padrão do client para o /api/auth/me
export const authApi: AuthApi = {
  async getMe() {
    try {
      const { data } = await axios.get<AuthUser>("/api/auth/me");
      return data;
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 401) return null;
      throw error;
    }
  },
};

// Configuração padrão da query do usuário autenticado
export const authMeQuery = (api: AuthApi = authApi) => ({
  queryKey: authKeys.me,
  queryFn: () => api.getMe(),
  // Evita re-fetchs automáticos; controlamos manualmente via actions
  staleTime: 5 * 60 * 1000, // 5 min
  gcTime: 30 * 60 * 1000, // 30 min
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});
