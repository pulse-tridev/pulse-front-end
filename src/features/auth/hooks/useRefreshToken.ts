import { useMutation } from "@tanstack/react-query";

import { AuthService } from "../services/auth.service";
import { SessionService } from "../services/session.service";

export function useRefreshToken() {
  return useMutation({
    mutationFn: AuthService.refreshToken,
    onSuccess: async (data) => {
      await SessionService.applyTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    },
  });
}
