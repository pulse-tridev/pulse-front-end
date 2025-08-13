import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type LayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

export const LayoutWrapper: React.FC<LayoutContainerProps> = ({
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};
