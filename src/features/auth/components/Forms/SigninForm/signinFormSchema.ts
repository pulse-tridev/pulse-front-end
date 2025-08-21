import * as z from "zod";

export const loginSchema = z.object({
  username: z.email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
