import { create } from "zustand";
import { UserModel } from "../models/user.model";

interface UserStore {
  user: UserModel;
  setUser: (user: UserModel) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {} as UserModel,
  setUser: (user: UserModel) => set({ user }),
  clearUser: () => set({ user: {} as UserModel }),
}));
