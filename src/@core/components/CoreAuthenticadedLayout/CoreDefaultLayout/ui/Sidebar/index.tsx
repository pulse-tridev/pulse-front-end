import React from "react";
import Drawer from "@mui/material/Drawer";
import UserInfo from "../BrandInfo";
import VerticalNav from "../VerticalNav";
import AppScrollbar from "../../../../CoreScrollbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { routesConfig } from "@core/routesConfig";
import SidebarWrapper from "./wrappers";

type SidebarProps = {
  isNavCollapsed: boolean;
  toggleNavCollapsed: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  toggleNavCollapsed,
  isNavCollapsed,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {isMobile ? (
        <Drawer
          anchor="left"
          open={isNavCollapsed}
          onClose={toggleNavCollapsed}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 280,
              backgroundColor: theme.palette.background.paper,
              boxSizing: "border-box",
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          <SidebarWrapper>
            <UserInfo />
            <AppScrollbar
              sx={{
                py: 2,
                height: "calc(100vh - 70px) !important",
              }}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </SidebarWrapper>
        </Drawer>
      ) : (
        <SidebarWrapper>
          <UserInfo />
          <AppScrollbar
            sx={{
              py: 2,
              height: "calc(100vh - 70px) !important",
            }}
          >
            <VerticalNav routesConfig={routesConfig} />
          </AppScrollbar>
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
