import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type SidebarBgWrapperProps = {
  children: ReactNode;
};

const SidebarBgWrapper: React.FC<SidebarBgWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        "& > *": {
          position: "relative",
          zIndex: 3,
        },
      })}
    >
      {children}
    </Box>
  );
};

export default SidebarBgWrapper;
