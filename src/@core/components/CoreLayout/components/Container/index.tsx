import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <Box
      className={className}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};
