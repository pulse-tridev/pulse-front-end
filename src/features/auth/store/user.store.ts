import { create } from "zustand";
import { AuthUser } from "../types";

interface UserStore {
  user: AuthUser;
  setUser: (user: AuthUser) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {} as AuthUser,
  setUser: (user: AuthUser) => set({ user }),
  clearUser: () => set({ user: {} as AuthUser }),
}));
