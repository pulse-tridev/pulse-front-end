import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type DefaultLayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

const DefaultLayoutContainer: React.FC<DefaultLayoutContainerProps> = ({
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

export default DefaultLayoutContainer;
