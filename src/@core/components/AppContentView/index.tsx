import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import AppContentViewWrapper from "./AppContentViewWrapper";

type AppContentViewProps = {
  children: ReactNode;
};

const AppContentView: React.FC<AppContentViewProps> = ({ children }) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: { xs: 2, md: 3, xl: 4 },
        }}
        className="app-content"
      >
        {children}
      </Box>
    </AppContentViewWrapper>
  );
};

export default AppContentView;
