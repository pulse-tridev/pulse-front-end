import { z } from "zod";
import { ROLES } from "./user.model";

export const ClaimsSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
  role: z.enum(ROLES),
  // Campos JWT comuns (opcionais)
  exp: z.number().optional(),
  iat: z.number().optional(),
  sub: z.string().optional(),
  iss: z.string().optional(),
  aud: z.union([z.string(), z.array(z.string())]).optional(),
});

export type Claims = z.infer<typeof ClaimsSchema>;
