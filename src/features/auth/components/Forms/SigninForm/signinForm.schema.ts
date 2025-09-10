import { LoginRequestSchema } from "../../../schemas/auth.schema";
import type { z } from "zod";
export const loginSchema = LoginRequestSchema;
export type LoginFormData = z.infer<typeof LoginRequestSchema>;
