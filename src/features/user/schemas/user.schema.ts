import { z } from "zod";
import { ROLES } from "@core/constants/roles";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.email().transform((v) => v.toLowerCase().trim()),
  username: z
    .string()
    .transform((v) => v.trim())
    .pipe(z.string().min(3)),
  role: z.enum(ROLES),
  cpf: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .pipe(z.string().min(11)), // opcional: adicionar refine para CPF válido
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .pipe(z.string().min(8)),
  createdAt: z.iso.datetime({ offset: true }),
  updatedAt: z.iso.datetime({ offset: true }),
});

// 🔹 Schemas derivados
export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateUserSchema = CreateUserSchema.partial();

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
