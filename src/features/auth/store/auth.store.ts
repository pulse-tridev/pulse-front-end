import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  setRefreshToken: (token: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      setAccessToken: (token) =>
        set({ accessToken: token, isAuthenticated: !!token }),
      setRefreshToken: (token) => set({ refreshToken: token }),
      logout: () =>
        set({ accessToken: null, refreshToken: null, isAuthenticated: false }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
      // Persistir somente o refreshToken
      partialize: (state) => ({ refreshToken: state.refreshToken }),
    }
  )
);
