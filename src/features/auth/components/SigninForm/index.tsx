"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import AppTextField from "@core/components/CoreForm/CoreTextField";
import { LoginFormData, loginSchema } from "./schemas/signinFormSchema";
import { useSigninForm } from "./hooks/useSigninForm";

const SigninForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useSigninForm();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 6 }}
    >
      <AppTextField
        fullWidth
        label="Usuário"
        {...register("login")}
        error={!!errors.login}
        helperText={errors.login?.message}
        autoComplete="off"
      />
      <AppTextField
        fullWidth
        label="Senha"
        type={isPasswordShown ? "text" : "password"}
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="off"
      />
      <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
        Entrar
      </Button>
    </Box>
  );
};

export default SigninForm;
