import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type MainContentProps = {
  children: ReactNode;
};

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        ml: { lg: "280px" },
        width: { xs: "100%", lg: `calc(100% - 280px)` },
        flexDirection: "column",
        position: "relative",
        transition: "all 0.5s ease",
      }}
      className="mainContent"
    >
      {children}
    </Box>
  );
};

export default MainContent;
