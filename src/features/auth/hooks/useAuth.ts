import { useAuthStore } from "../store/auth.store";
import * as authService from "../api/auth.service";

export function useAuth() {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const logoutStore = useAuthStore((state) => state.logout);

  async function login(username: string, password: string) {
    const data = await authService.login({ username, password });
    setAccessToken(data.token); // efeito colateral aqui
  }

  function logout() {
    logoutStore();
  }

  async function refresh() {
    const data = await authService.refreshToken();
    setAccessToken(data.access_token);
    return data;
  }

  return { login, refresh, logout };
}
