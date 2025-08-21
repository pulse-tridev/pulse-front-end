import { useToastStore } from "@core/store/toast.store";

export const useToast = () => {
  const addToast = useToastStore((state) => state.addToast);

  const success = (message: string, duration?: number) =>
    addToast({ message, variant: "success", duration });
  const error = (message: string, duration?: number) =>
    addToast({ message, variant: "error", duration });
  const info = (message: string, duration?: number) =>
    addToast({ message, variant: "info", duration });
  const warning = (message: string, duration?: number) =>
    addToast({ message, variant: "warning", duration });

  return { success, error, info, warning };
};
