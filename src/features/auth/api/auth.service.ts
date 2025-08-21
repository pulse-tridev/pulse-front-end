import axiosJwt from "@core/lib/axios";
import { LoginRequestDTO, LoginResponseDTO } from "./auth.dto";

export const login = async ({
  username,
  password,
}: LoginRequestDTO): Promise<LoginResponseDTO> => {
  const { data } = await axiosJwt.post("/auth/login", { username, password });
  return data;
};

export const refreshToken = async () => {
  const { data } = await axiosJwt.post("/auth/refresh");
  return data;
};
