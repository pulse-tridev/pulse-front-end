import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  LoginRequestDTO,
  LoginResponseDTO,
} from "src/features/auth/api/auth.dto";
import { login } from "src/features/auth/api/auth.service";

export const useSigninForm = () =>
  useMutation<
    LoginResponseDTO,
    AxiosError<{ message: string }>,
    LoginRequestDTO
  >({
    mutationFn: login,
  });
