"use client";

import { useEffect, useRef, useState } from "react";
import { useRefreshToken } from "../../auth/hooks/useRefreshToken";
import { Box, CircularProgress } from "@mui/material";
import { useAuthStore } from "src/features/auth/store/auth.store";
import { useUserStore } from "src/features/auth/store/user.store";

type Props = {
  children: React.ReactNode;
};

export default function AuthBootstrapGate({ children }: Props) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const startedRef = useRef(false);
  const refreshMutation = useRefreshToken();

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const { accessToken, refreshToken } = useAuthStore.getState();
    if (accessToken) {
      setIsBootstrapping(false);
      return;
    }
    if (!refreshToken) {
      setIsBootstrapping(false);
      return;
    }

    refreshMutation
      .mutateAsync()
      .catch(() => {})
      .finally(() => setIsBootstrapping(false));
  }, []);

  if (isBootstrapping) {
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

  return <>{children}</>;
}
