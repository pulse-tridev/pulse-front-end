import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type SidebarBgWrapperProps = {
  children: ReactNode;
};

const SidebarBgWrapper: React.FC<SidebarBgWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#fff", // Cor específica igual ao insomni-web
        color: "rgba(0, 0, 0, 0.60)", // Cor do texto igual ao insomni-web
        "& > *": {
          position: "relative",
          zIndex: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarBgWrapper;
