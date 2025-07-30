import { useMutation } from "@tanstack/react-query";
import { LoginRequest, LoginResponse } from "../../../types/authTypes";
import { signinUser } from "../../../services/authService";

export const useSigninForm = () =>
  useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: signinUser,
  });
