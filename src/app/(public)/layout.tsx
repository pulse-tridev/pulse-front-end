import BlankLayout from "@core/components/CoreLayout/BlankLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return <BlankLayout>{children}</BlankLayout>;
}
