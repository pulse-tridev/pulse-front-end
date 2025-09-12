import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import axiosJwt from "@core/lib/axios";
import { AuthUser } from "../types";

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const isAuthenticated = !!user;

  // Busca dados do usuário autenticado
  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/auth/me");
      setUser(response.data);
    } catch (error: any) {
      setUser(null);
      // Se retornar 401, significa que não está autenticado
      if (error?.response?.status === 401) {
        // Usuário não autenticado - isso é normal
      } else {
        console.error("Erro ao buscar usuário:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login
  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      try {
        setIsLoading(true);
        await axiosJwt.post("/auth/login", credentials);

        // Define flag de sessão PRIMEIRO
        await axios.post("/api/session/flag/set");

        // Depois busca dados do usuário
        await fetchUser();

        router.push("/users/list");
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [fetchUser, router]
  );

  // Logout
  const logout = useCallback(async () => {
    // Limpa o estado local primeiro
    setUser(null);

    // Usa o endpoint local de logout (mais confiável)
    try {
      await axios.post("/api/auth/logout");
    } catch (error) {
      console.warn("Erro no logout local:", error);
      // Fallback: tenta limpar apenas a flag de sessão
      try {
        await axios.post("/api/session/flag/clear");
      } catch (fallbackError) {
        console.warn("Erro ao limpar flag de sessão:", fallbackError);
      }
    }

    // Redireciona para login
    router.push("/signin");
  }, [router]);

  // Refresh dos dados do usuário
  const refreshUser = useCallback(async () => {
    await fetchUser();
  }, [fetchUser]);

  // Busca dados do usuário na inicialização
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    refreshUser,
  };
}
