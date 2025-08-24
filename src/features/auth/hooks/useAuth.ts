import { useAuthStore } from "../store/auth.store";
import { useLogin } from "./useLogin";
import { useRefreshToken } from "./useRefreshToken";

export function useAuth() {
  const { accessToken, logout } = useAuthStore();
  const loginMutation = useLogin();
  const refreshMutation = useRefreshToken();

  return {
    isAuthenticated: !!accessToken,
    accessToken,
    login: loginMutation.mutate,
    refresh: refreshMutation.mutate,
    logout,
    loginStatus: loginMutation.status,
    refreshStatus: refreshMutation.status,
  };
}
