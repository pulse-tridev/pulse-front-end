import { Box, Typography } from "@mui/material";
import { AuthLayout } from "src/features/auth/components/AuthLayout";
import { AuthCard } from "src/features/auth/components/AuthCard";
import { AuthContainer } from "src/features/auth/components/AuthContainer.tsx";
import SigninForm from "src/features/auth/components/SigninForm";

export default function SignInPage() {
  const projectName = "Pulse Dashboard - Gestão Inteligente";
  return (
    <AuthLayout.Root>
      {/* <AuthLayout.Background backgroundImage="/images/backgrounds/signin-bg.png" /> */}
      {/* <AuthLayout.Header>
        <h1>{projectName}</h1>
      </AuthLayout.Header> */}

      <AuthLayout.Body>
        <AuthContainer.Root>
          <AuthContainer.LeftSide>
            <Box
              sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, color: "#ffff" }}>
                {projectName}
              </Typography>
            </Box>
          </AuthContainer.LeftSide>

          <AuthContainer.RightSide>
            {/* <AuthCard.Root>
              <AuthCard.Title>Fazer login</AuthCard.Title>

              <AuthCard.Instruction>
                Para acessar o sistema, faça login com seu e-mail e senha.
              </AuthCard.Instruction>

              <SigninForm />
            </AuthCard.Root> */}

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AuthCard.Title>Fazer login</AuthCard.Title>

              <AuthCard.Instruction>
                Para acessar o sistema, faça login com seu e-mail e senha.
              </AuthCard.Instruction>

              <SigninForm />
            </Box>
          </AuthContainer.RightSide>
        </AuthContainer.Root>
      </AuthLayout.Body>

      {/* <AuthLayout.Footer>
        <p>
          Copyright © {new Date().getFullYear()} Vitta. All rights reserved.
        </p>
      </AuthLayout.Footer> */}
    </AuthLayout.Root>
  );
}
