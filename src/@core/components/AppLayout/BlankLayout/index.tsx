import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
};

const BlankLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: (theme) => theme.palette.background.default,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default BlankLayout;
