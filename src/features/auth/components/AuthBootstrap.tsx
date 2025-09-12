"use client";

import { useEffect, useRef } from "react";
import axios from "@core/lib/axios";

export default function AuthBootstrap() {
  const hasBootstrappedRef = useRef(false);

  useEffect(() => {
    if (hasBootstrappedRef.current) return;
    hasBootstrappedRef.current = true;

    // Com cookies HttpOnly, não precisamos fazer refresh manual
    // O interceptor do axios já cuida disso automaticamente
    // Este componente agora é apenas um placeholder para compatibilidade
  }, []);

  return null;
}
