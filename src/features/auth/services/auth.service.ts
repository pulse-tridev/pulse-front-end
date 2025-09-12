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
    // Backend agora seta cookies HttpOnly; resposta pode conter tokens ou não
    const { data } = await axiosJwt.post("/auth/login", parsedPayload);
    // Se a API ainda retorna os tokens para compatibilidade, validamos; caso contrário, retornamos shape vazio
    try {
      const parsed = LoginResponseSchema.parse(data);
      return parsed;
    } catch (_) {
      // Sem tokens no corpo: retornamos placeholders para compat
      return { accessToken: "", refreshToken: "" } as LoginResponse;
    }
  },

  async refreshToken(): Promise<RefreshTokenResponse> {
    // Com cookies HttpOnly, apenas chamamos o endpoint
    const { data } = await axiosRefresh.post("/auth/refresh");
    try {
      const parsed = RefreshTokenResponseSchema.parse(data);
      return parsed;
    } catch (_) {
      return { accessToken: "", refreshToken: "" } as RefreshTokenResponse;
    }
  },
};
