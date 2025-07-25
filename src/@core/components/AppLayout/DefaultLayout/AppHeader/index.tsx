import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppAccountPopover } from "./components/AccountPopover";

type Props = {
  toggleNavCollapsed: () => void;
};

const AppHeader: React.FC<Props> = ({ toggleNavCollapsed }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{
        maxHeight: { xs: 56, sm: 70 },
        height: { xs: 56, sm: 70 },
        boxSizing: "border-box",
        boxShadow: "none",
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        backgroundColor: "background.paper",
        borderRadius: 0,
        width: {
          xs: "100%",
        },
      }}
      className="app-bar"
    >
      <Toolbar
        sx={{
          boxSizing: "border-box",
          paddingLeft: { xs: 5 },
          paddingRight: { xs: 5, md: 7.5, xl: 12.5 },
        }}
      >
        {isMobile && (
          <IconButton
            sx={{
              color: "text.secondary",
            }}
            edge="start"
            className="menu-btn"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleNavCollapsed}
            size="large"
          >
            <MenuIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        )}

        <Box
          sx={{
            flexGrow: 1,
          }}
        />
        <AppAccountPopover />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
