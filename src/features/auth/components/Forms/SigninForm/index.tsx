"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppTextField from "@core/components/CoreForm/CoreTextField";
import { LoginFormData, loginSchema } from "./signinFormSchema";
import { Box, Button, Grid, InputLabel } from "@mui/material";
import { useSigninForm } from "./useSigninForm";
import { Trash } from "lucide-react";

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
          <AppTextField
            id="login"
            autoFocus
            size="small"
            fullWidth
            {...register("login")}
            error={!!errors.login}
            helperText={errors.login?.message}
            autoComplete="off"
          />
        </Grid>

        <Grid>
          <InputLabel htmlFor="password" sx={{ mb: 1 }}>
            Senha
          </InputLabel>
          <AppTextField
            id="password"
            fullWidth
            size="small"
            type={isPasswordShown ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="off"
          />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button type="submit" variant="contained" size="large">
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SigninForm;
