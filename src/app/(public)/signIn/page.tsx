import { Box, Typography } from "@mui/material";
import { AuthLayout } from "src/features/auth/components/AuthLayout";
import { AuthCard } from "src/features/auth/components/AuthCard";
import { AuthContainer } from "src/features/auth/components/AuthContainer.tsx";
import SigninForm from "src/features/auth/components/SigninForm";
import Image from "next/image";
import CoreBrandLogo from "@core/components/CoreBranding/CoreBrandLogo";
import CoreBrandName from "@core/components/CoreBranding/CoreBrandName";

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
          <AuthContainer.Brand>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              asd
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 32,
                left: 60,
                transform: "translateX(-50%)",
                zIndex: 999,
                width: 500,
                height: 500,
              }}
            >
              <Image
                src="/images/illustrations/mascot/mascot-1.png"
                alt="Mascote Vitta"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </AuthContainer.Brand>
          <AuthContainer.Content>
            <AuthCard.Root>
              <AuthCard.Title>Fazer login</AuthCard.Title>

              <AuthCard.Instruction>
                Para acessar o sistema, faça login com seu e-mail e senha.
              </AuthCard.Instruction>

              <SigninForm />
            </AuthCard.Root>
          </AuthContainer.Content>
        </AuthContainer.Root>
      </AuthLayout.Body>

      <AuthLayout.Footer>
        <p>
          Copyright © {new Date().getFullYear()} Vitta. All rights reserved.
        </p>
      </AuthLayout.Footer>
    </AuthLayout.Root>
  );
}
