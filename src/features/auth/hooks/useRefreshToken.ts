import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";

export function useRefreshToken() {
  return useMutation({
    mutationFn: AuthService.refreshToken,
    // Com cookies HttpOnly, não precisamos fazer nada no onSuccess
    // O interceptor do axios já cuida do refresh automático
  });
}
