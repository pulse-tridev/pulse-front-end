import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import SidebarBgWrapper from "./SidebarBGWrapper";

type SidebarWrapperProps = {
  children: ReactNode;
};

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      sx={{
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        position: { xs: "relative", lg: "fixed" },
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        top: 0,
        left: 0,
        zIndex: 1101,
        width: 280,
        maxHeight: "100vh",
        height: "100%",
        transition: "all 0.4s ease",
      }}
      {...rest}
    >
      <SidebarBgWrapper>{children}</SidebarBgWrapper>
    </Box>
  );
};

export default SidebarWrapper;
