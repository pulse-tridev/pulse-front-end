"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "src/features/auth/store/auth.store";
import { useRefreshToken } from "../../auth/hooks/useRefreshToken";

export default function AuthBootstrap() {
  const hasBootstrappedRef = useRef(false);
  const refreshMutation = useRefreshToken();

  useEffect(() => {
    if (hasBootstrappedRef.current) return;
    hasBootstrappedRef.current = true;

    const { accessToken, refreshToken } = useAuthStore.getState();
    if (accessToken || !refreshToken) return;

    refreshMutation.mutate();
  }, []);

  return null;
}
