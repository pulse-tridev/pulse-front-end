import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/auth.service";
import { useAuthStore } from "../store/auth.store";
import axios from "axios";

export function useLogin() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  return useMutation({
    // Aguarda salvar o cookie de sessão antes de concluir a mutação
    mutationFn: async (payload: Parameters<typeof AuthService.login>[0]) => {
      const data = await AuthService.login(payload);
      setAccessToken(data.accessToken);
      try {
        await axios.post("/api/session/set", {
          refreshToken: data.refreshToken,
        });
      } catch (e) {
        // Ignora falha no set de sessão; middleware ainda bloqueará caso necessário
      }
      return data;
    },
  });
}
