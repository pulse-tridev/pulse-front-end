"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "./signinFormSchema";
import { Box, Button, Grid, InputLabel } from "@mui/material";
import { useSigninForm } from "./useSigninForm";
import CoreTextField from "@core/components/CoreForm/CoreTextField";
import { useToast } from "@core/hooks/useToast";

const SigninForm = () => {
  const toast = useToast();
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
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        toast.success("Login realizado com sucesso!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  console.log("renderizou");

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        <Grid>
          <InputLabel htmlFor="login" sx={{ mb: 1 }}>
            Endereço de e-mail
          </InputLabel>
          <CoreTextField
            id="username"
            autoFocus
            fullWidth
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            autoComplete="off"
          />
        </Grid>

        <Grid>
          <InputLabel htmlFor="password" sx={{ mb: 1 }}>
            Senha
          </InputLabel>
          <CoreTextField
            id="password"
            fullWidth
            type={isPasswordShown ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="off"
          />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained" size="large">
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SigninForm;
