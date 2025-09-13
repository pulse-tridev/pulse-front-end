import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "./signinForm.schema";
import { useAuthActions } from "src/features/auth/hooks/useAuthActions";
import { useMutation } from "@tanstack/react-query";

export function useSigninForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuthActions();

  const loginMutation = useMutation({
    mutationFn: login,
  });

  return { form, loginMutation };
}
