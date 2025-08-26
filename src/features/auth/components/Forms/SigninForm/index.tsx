"use client";

import { Box, Button, Grid, InputLabel } from "@mui/material";
import CoreTextField from "@core/components/CoreForm/CoreTextField";
import { useToast } from "@core/hooks/useToast";
import { useSigninForm } from "./useSigninForm";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const toast = useToast();
  const { form, loginMutation } = useSigninForm();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = form;

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Login realizado com sucesso!");
        router.push("/admin/home");
      },
      onError: (err) => {
        const message = err.message || "E-mail ou senha inválidos";
        setError("email", { message });
        setError("password", { message });
      },
    });
  });

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}
    >
      <Grid>
        <InputLabel htmlFor="email" sx={{ mb: 1 }}>
          Endereço de e-mail
        </InputLabel>
        <CoreTextField
          id="email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          autoComplete="off"
          disabled={loginMutation.isPending}
        />
      </Grid>

      <Grid>
        <InputLabel htmlFor="password" sx={{ mb: 1 }}>
          Senha
        </InputLabel>
        <CoreTextField
          id="password"
          fullWidth
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          autoComplete="off"
          disabled={loginMutation.isPending}
        />
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Entrando..." : "Entrar"}
        </Button>
      </Box>
    </Box>
  );
};

export default SigninForm;
