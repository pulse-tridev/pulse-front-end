import React from "react";
import BlankLayout from "@core/components/CoreLayout/CoreBlankLayout";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return <BlankLayout>{children}</BlankLayout>;
}
