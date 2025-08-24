import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/auth.service";
import { useAuthStore } from "../store/auth.store";

export function useLogin() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
    },
  });
}
