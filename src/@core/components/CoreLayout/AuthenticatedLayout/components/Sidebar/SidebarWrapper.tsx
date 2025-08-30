import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import SidebarBgWrapper from "./SidebarBGWrapper";

type SidebarWrapperProps = {
  children: ReactNode;
  collapsed?: boolean;
};

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  return (
    <Box
      sx={(theme) => ({
        p: 0,
        position: { xs: "relative", lg: "fixed" },
        top: 0,
        left: 0,
        zIndex: theme.zIndex.drawer + 1,
        width: { xs: 280, lg: collapsed ? 72 : 280 },
        maxHeight: "100vh",
        height: "100%",
        backgroundColor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
      })}
      {...rest}
    >
      <SidebarBgWrapper>{children}</SidebarBgWrapper>
    </Box>
  );
};

export default SidebarWrapper;
