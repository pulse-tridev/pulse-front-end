import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type ContentProps = {
  children: ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        ml: { lg: "280px" },
        width: { xs: "100%", lg: `calc(100% - 280px)` },
        flexDirection: "column",
        position: "relative",
        transition: (theme) =>
          theme.transitions.create("all", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
      }}
      className="mainContent"
    >
      {children}
    </Box>
  );
};

