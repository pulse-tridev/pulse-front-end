import axiosJwt, { axiosRefresh } from "@core/lib/axios";
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
} from "../models/auth.model";

export const AuthService = {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const { data } = await axiosJwt.post("/auth/login", payload);
    return data as LoginResponse;
  },

  async refreshToken(): Promise<RefreshTokenResponse> {
    // Usa cliente dedicado para refresh (Authorization com refreshToken)
    const { data } = await axiosRefresh.post("/auth/refresh");
    return data as RefreshTokenResponse;
  },
};
