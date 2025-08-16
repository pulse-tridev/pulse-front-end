import { useMutation } from "@tanstack/react-query";
import { signinUser } from "src/features/auth/services/authServices";
import { LoginRequest, LoginResponse } from "src/features/auth/types/authTypes";


export const useSigninForm = () =>
  useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: signinUser,
  });
