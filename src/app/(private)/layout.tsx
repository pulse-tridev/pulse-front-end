"use client";

import React from "react";
import DefaultLayout from "@core/components/CoreAuthenticadedLayout/CoreDefaultLayout";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
