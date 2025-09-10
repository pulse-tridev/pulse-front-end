import axiosJwt, { axiosRefresh } from "@core/lib/axios";
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  LoginResponseSchema,
  RefreshTokenResponseSchema,
  LoginRequestSchema,
} from "../schemas/auth.schema";

export const AuthService = {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const parsedPayload = LoginRequestSchema.parse(payload);
    const { data } = await axiosJwt.post("/auth/login", parsedPayload);
    const parsed = LoginResponseSchema.parse(data);
    return parsed;
  },

  async refreshToken(): Promise<RefreshTokenResponse> {
    // Usa cliente dedicado para refresh (Authorization com refreshToken)
    const { data } = await axiosRefresh.post("/auth/refresh");
    const parsed = RefreshTokenResponseSchema.parse(data);
    return parsed;
  },
};
