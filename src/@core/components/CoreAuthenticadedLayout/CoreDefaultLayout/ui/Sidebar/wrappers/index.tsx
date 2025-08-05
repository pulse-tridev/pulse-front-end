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
      sx={(theme) => ({
        p: 0,
        position: { xs: "relative", lg: "fixed" },
        borderRight: `1px solid ${theme.palette.divider}`,
        top: 0,
        left: 0,
        zIndex: theme.zIndex.drawer + 1,
        width: 280,
        maxHeight: "100vh",
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create("all", {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }),
        boxShadow: theme.shadows[1],
      })}
      {...rest}
    >
      <SidebarBgWrapper>{children}</SidebarBgWrapper>
    </Box>
  );
};

export default SidebarWrapper;
