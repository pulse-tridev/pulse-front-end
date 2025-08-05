import React, { ReactNode } from "react";
import BlankLayout from "./Wrappers/BlankLayout";

type Props = {
  children: ReactNode;
};

const CoreBlankLayout: React.FC<Props> = ({ children }) => {
  return <BlankLayout>{children}</BlankLayout>;
};

export default CoreBlankLayout;
