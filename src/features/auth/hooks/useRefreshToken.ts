import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/auth.service";
import { useAuthStore } from "../store/auth.store";

export function useRefreshToken() {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  return useMutation({
    mutationFn: AuthService.refreshToken,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
    },
  });
}
