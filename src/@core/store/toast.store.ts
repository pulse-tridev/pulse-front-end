// stores/toast.store.ts
import { create } from "zustand";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastMessage {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number; // em ms, padrão 3000
}

interface ToastStore {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, "id">) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: ({ message, variant, duration }) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: Date.now().toString() + Math.random(), // id único
          message,
          variant,
          duration: duration || 3000,
        },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
