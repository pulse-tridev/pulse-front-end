"use client";

import AuthenticatedLayout from "@core/components/CoreLayout/AuthenticatedLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
