import axiosJwt, { axiosRefresh } from "@core/lib/axios";
import {
  LoginRequestDTO,
  LoginResponseDTO,
  RefreshTokenResponseDTO,
} from "./auth.dto";

export const AuthService = {
  async login(payload: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { data } = await axiosJwt.post("/auth/login", payload);
    return data as LoginResponseDTO;
  },

  async refreshToken(): Promise<RefreshTokenResponseDTO> {
    // Usa cliente dedicado para refresh (Authorization com refreshToken)
    const { data } = await axiosRefresh.post("/auth/refresh");
    return data as RefreshTokenResponseDTO;
  },
};
