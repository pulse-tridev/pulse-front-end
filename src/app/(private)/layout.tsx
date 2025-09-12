"use client";

import DashboardLayout from "@core/components/CoreLayout/DashboardLayout";
import React from "react";
import AuthBootstrapGate from "src/features/auth/components/AuthBootstrapGate";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return (
    <AuthBootstrapGate>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthBootstrapGate>
  );
}

export const dynamic = "force-dynamic";
