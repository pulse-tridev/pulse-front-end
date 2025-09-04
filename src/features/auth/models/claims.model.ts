import { z } from "zod";
import { ROLES } from "./user.model";

export const ClaimsSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
  role: z.enum(ROLES),
});

export type Claims = z.infer<typeof ClaimsSchema>;
