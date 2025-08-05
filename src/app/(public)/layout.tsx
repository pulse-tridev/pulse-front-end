import React from "react";
import BlankLayout from "@core/components/CoreBlankLayout";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return <BlankLayout>{children}</BlankLayout>;
}
