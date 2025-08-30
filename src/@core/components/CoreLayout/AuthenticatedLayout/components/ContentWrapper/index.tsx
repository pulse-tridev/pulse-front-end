import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type ContentWrapperProps = {
  children: ReactNode;
  collapsed?: boolean;
};

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  collapsed,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        ml: { lg: collapsed ? `72px` : `280px` },
        width: {
          xs: "100%",
          lg: collapsed ? `calc(100% - 72px)` : `calc(100% - 280px)`,
        },
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
