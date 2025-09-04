import axios from "axios";
import { useAuthStore } from "../store/auth.store";
import { useUserStore } from "../store/user.store";
import { extractUserFromAccessToken } from "../utils/claims";

type ApplyTokensOptions = {
  accessToken: string;
  refreshToken?: string;
  setSessionFlag?: boolean;
};

export const SessionService = {
  applyTokens: async ({
    accessToken,
    refreshToken,
    setSessionFlag,
  }: ApplyTokensOptions) => {
    useAuthStore.getState().setAccessToken(accessToken);
    if (refreshToken) {
      useAuthStore.getState().setRefreshToken(refreshToken);
    }

    const user = extractUserFromAccessToken(accessToken);
    if (user) {
      useUserStore.getState().setUser(user);
    }

    if (setSessionFlag) {
      try {
        await axios.post("/api/session/flag/set");
      } catch (_) {}
    }
  },

  syncUserFromAccessToken: (accessToken: string | null | undefined) => {
    const user = extractUserFromAccessToken(accessToken);
    if (user) {
      useUserStore.getState().setUser(user);
    } else {
      useUserStore.getState().clearUser();
    }
  },

  clearSession: async (opts?: { clearSessionFlag?: boolean }) => {
    useAuthStore.getState().logout();
    useUserStore.getState().clearUser();
    if (opts?.clearSessionFlag) {
      try {
        await axios.post("/api/session/flag/clear");
      } catch (_) {}
    }
  },
};
