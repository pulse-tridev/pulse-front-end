import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type ContentViewProps = {
  children: ReactNode;
};

const ContentView: React.FC<ContentViewProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        maxWidth: { xl: 1650 },
        mx: { xl: "auto" },
        width: { xl: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: { xs: 2, md: 3, xl: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ContentView;
