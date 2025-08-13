import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type ContentViewProps = {
  children: ReactNode;
};

export const ContentView: React.FC<ContentViewProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        maxWidth: { xl: 1650 },
        mx: "auto",
        width: "100%",
        px: { xs: 2, md: 3, xl: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
