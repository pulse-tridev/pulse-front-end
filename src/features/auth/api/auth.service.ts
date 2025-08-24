import axiosJwt, { axiosRefresh } from "@core/lib/axios";
import {
  LoginRequestDTO,
  LoginResponseDTO,
  RefreshTokenResponseDTO,
} from "./auth.dto";

export const AuthService = {
  async login({ email, password }: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { data } = await axiosJwt.post("/auth/login", { email, password });
    return data;
  },

  async refreshToken(): Promise<RefreshTokenResponseDTO> {
    // Usa cliente dedicado para refresh (sem interceptor de 401 recursivo)
    const { data } = await axiosRefresh.post("/auth/refresh");
    return data;
  },
};
