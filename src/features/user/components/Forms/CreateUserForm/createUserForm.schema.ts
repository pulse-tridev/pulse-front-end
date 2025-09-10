import { CreateUserSchema } from "../../../schemas/user.schema";
import type { z } from "zod";
export const createUserSchema = CreateUserSchema;
export type CreateUserFormData = z.infer<typeof CreateUserSchema>;
