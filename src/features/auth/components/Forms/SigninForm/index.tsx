"use client";

import { Box, Button, Grid, InputLabel } from "@mui/material";
import { useToast } from "@core/hooks/useToast";
import { useSigninForm } from "./useSigninForm";
import { useRouter } from "next/navigation";
import { CoreTextField } from "@core/components/CoreForm";

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
        router.push("/users/list");
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
        <CoreTextField
          id="email"
          fullWidth
          topLabel="Endereço de e-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          autoComplete="off"
          disabled={loginMutation.isPending}
          autoFocus
        />
      </Grid>

      <Grid>
        <CoreTextField
          id="password"
          fullWidth
          type="password"
          topLabel="Senha"
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
          disabled={loginMutation.isPending}
          fullWidth
        >
          {loginMutation.isPending ? "Entrando..." : "Entrar"}
        </Button>
      </Box>
    </Box>
  );
};

export default SigninForm;
