import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
          minHeight: { xs: 56, sm: 70 },
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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Pulse Dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        />

        {/* Aqui você pode adicionar componentes adicionais como notificações, etc. */}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
