import { LoginRequest, LoginResponse } from "../types/authTypes";
import axios from "axios";

export const signinUser = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};
