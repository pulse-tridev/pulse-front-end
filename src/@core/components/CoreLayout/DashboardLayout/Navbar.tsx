"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Menu, ChevronLeft, ChevronRight } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { alpha } from "@mui/material/styles";

type Props = {
  onToggleMobile: () => void;
  sidebarWidth?: number;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
};

export default function Navbar({
  onToggleMobile,
  sidebarWidth = 240,
  collapsed = false,
  onToggleCollapse,
}: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        width: "100%",
        ml: 0,
        borderRadius: 0,
      }}
    >
      <Toolbar>
        {/* Botão mobile: abre Drawer temporário */}
        <Tooltip title="Abrir menu" placement="bottom">
          <IconButton
            color="inherit"
            edge="start"
            onClick={onToggleMobile}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
        </Tooltip>
        {/* Botão desktop: colapsar/expandir Sidebar */}
        {onToggleCollapse && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onToggleCollapse}
            disableRipple
            disableFocusRipple
            sx={{ mr: 2, display: { xs: "none", md: "inline-flex" }, p: 0 }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 10,
                }}
                className="navbar-collapse-bg"
              />
              {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
            </span>
          </IconButton>
        )}
        <Typography variant="h6" noWrap>
          Clínica XYZ
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
