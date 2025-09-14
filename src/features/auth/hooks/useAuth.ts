import { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import axiosJwt from "@core/lib/axios";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { AuthUser } from "../types";
import { authMeQuery, authKeys } from "../queries";

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Estado fonte da verdade: cache do React Query
  const { data: user, isLoading } = useQuery(authMeQuery());
  const isAuthenticated = !!user;

  // Busca/atualiza usuário sob demanda
  const refreshUser = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: authKeys.me });
    await queryClient.ensureQueryData(authMeQuery());
  }, [queryClient]);

  // Login
  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      await axiosJwt.post("/auth/login", credentials);
      await axios.post("/api/session/flag/set");
      await queryClient.invalidateQueries({ queryKey: authKeys.me });
      await queryClient.prefetchQuery(authMeQuery());
      router.push("/users/list");
    },
    [queryClient, router]
  );

  // Logout
  const logout = useCallback(async () => {
    try {
      await axios.post("/api/auth/logout");
    } catch (error) {
      try {
        await axios.post("/api/session/flag/clear");
      } catch (_) {}
    }
    // Limpa cache de usuário
    queryClient.setQueryData(authKeys.me, null);
    await queryClient.invalidateQueries({ queryKey: authKeys.me });
    router.push("/auth");
  }, [queryClient, router]);

  return {
    user: user ?? null,
    isLoading,
    isAuthenticated,
    login,
    logout,
    refreshUser,
  };
}
