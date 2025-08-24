import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "./signinFormSchema";
import { useLogin } from "src/features/auth/hooks/useLogin";

export function useSigninForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  return { form, loginMutation };
}
