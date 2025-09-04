import { useMutation } from "@tanstack/react-query";

import { AuthService } from "../services/auth.service";
import { SessionService } from "../services/session.service";

export function useLogin() {
  return useMutation({
    mutationFn: async (payload: Parameters<typeof AuthService.login>[0]) => {
      const data = await AuthService.login(payload);
      await SessionService.applyTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        setSessionFlag: true,
      });
      return data;
    },
  });
}
