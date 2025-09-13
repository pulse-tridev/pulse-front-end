import { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import axiosJwt from "@core/lib/axios";
import { useQueryClient } from "@tanstack/react-query";
import { authKeys, authMeQuery } from "../queries";

interface UseAuthActionsReturn {
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

// Somente ações (nenhum fetch de /api/auth/me aqui)
export function useAuthActions(): UseAuthActionsReturn {
  const router = useRouter();
  const queryClient = useQueryClient();

  const refreshUser = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: authKeys.me });
    await queryClient.ensureQueryData(authMeQuery());
  }, [queryClient]);

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

  const logout = useCallback(async () => {
    try {
      await axios.post("/api/auth/logout");
    } catch (error) {
      try {
        await axios.post("/api/session/flag/clear");
      } catch (_) {}
    }
    queryClient.setQueryData(authKeys.me, null);
    await queryClient.invalidateQueries({ queryKey: authKeys.me });
    router.push("/signin");
  }, [queryClient, router]);

  return { login, logout, refreshUser };
}
