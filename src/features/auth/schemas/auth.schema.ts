import { z } from "zod";

export const LoginRequestSchema = z.object({
  email: z.email().transform((v) => v.toLowerCase().trim()),
  password: z.string().min(6),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const LoginResponseSchema = z.object({
  accessToken: z.jwt(),
  refreshToken: z.jwt(),
});
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const RefreshTokenResponseSchema = LoginResponseSchema;
export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponseSchema>;
