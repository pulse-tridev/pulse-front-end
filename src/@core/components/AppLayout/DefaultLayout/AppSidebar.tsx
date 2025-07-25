import React from "react";
import Drawer from "@mui/material/Drawer";
import MainSidebar from "../components/MainSidebar";
import UserInfo from "../components/UserInfo";
import VerticalNav from "../components/VerticalNav";
import AppScrollbar from "../../AppScrollbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { routesConfig } from "@core/routesConfig";

type AppSidebarProps = {
  isNavCollapsed: boolean;
  toggleNavCollapsed: () => void;
};

const AppSidebar: React.FC<AppSidebarProps> = ({
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
          onClose={() => toggleNavCollapsed()}
          style={{ position: "absolute" }}
        >
          <MainSidebar>
            <UserInfo />
            <AppScrollbar
              sx={{
                py: 2,
                height: "calc(100vh - 70px) !important",
                // borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </Drawer>
      ) : (
        <MainSidebar>
          <UserInfo />
          <AppScrollbar
            sx={{
              py: 2,
              height: "calc(100vh - 70px) !important",
              // borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            <VerticalNav routesConfig={routesConfig} />
          </AppScrollbar>
        </MainSidebar>
      )}
    </>
  );
};

export default AppSidebar;
