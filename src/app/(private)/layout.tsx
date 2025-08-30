"use client";

import AuthenticatedLayout from "@core/components/CoreLayout/AuthenticatedLayout";
import DashboardLayout from "@core/components/CoreLayout/DashboardLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
