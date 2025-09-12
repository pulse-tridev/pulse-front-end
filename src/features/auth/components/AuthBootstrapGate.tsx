"use client";

import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function AuthBootstrapGate({ children }: Props) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    // Aguarda o carregamento inicial do useAuth
    if (!isLoading) {
      setIsBootstrapping(false);
    }
  }, [isLoading]);

  // Se ainda está carregando, mostra loading
  if (isBootstrapping || isLoading) {
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100dvh",
        }}
      >
        <CircularProgress size={28} thickness={4} />
      </Box>
    );
  }

  // Se não está autenticado, o middleware já redirecionou para /signin
  // Se chegou aqui, está autenticado
  return <>{children}</>;
}
