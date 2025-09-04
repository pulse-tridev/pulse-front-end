"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "src/features/auth/store/auth.store";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUserStore } from "src/features/auth/store/user.store";

type MenuAnchor = null | HTMLElement;

const AccountPopover = () => {
  const { user } = useUserStore();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<MenuAnchor>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    handleClose();
    router.push(path);
  };

  const handleLogout = () => {
    handleClose();
    useAuthStore.getState().logout();
    useUserStore.getState().clearUser();
    axios
      .post("/api/session/flag/clear")
      .catch(() => {})
      .finally(() => {
        router.push("/signin");
      });
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-controls={open ? "dashboard-account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          p: 0,
          "&:hover": { backgroundColor: "transparent" },
          "&.Mui-focusVisible": (theme) => ({
            outline: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
            outlineOffset: 2,
            borderRadius: "50%",
          }),
        }}
      >
        <Avatar sx={{ width: 38, height: 38, fontSize: 14, fontWeight: 600 }}>
          {user.name[0].toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        id="dashboard-account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: (theme) => ({
              minWidth: 180,
              p: 0.5,
              "& .MuiDivider-root": { my: 0.5 },
              "& .MuiMenuItem-root": {
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.2,
                minHeight: 36,
                mx: 0.5,
                px: 1.25,
                py: 0.75,
                color: theme.palette.text.secondary,
              },
              "& .MuiListItemIcon-root": {
                minWidth: 26,
                color: theme.palette.text.secondary,
                "& svg": { fontSize: 18 },
              },
            }),
          },
        }}
      >
        {/* Header minimalista */}
        <Box sx={{ px: 2, pt: 1.5, pb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              // src={mockedUser.photoURL}
              alt={user.name}
              sx={(theme) => ({
                width: 36,
                height: 36,
                fontSize: 14,
                fontWeight: 700,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.common.white,
              })}
            >
              {user.name[0].toUpperCase()}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="body2" noWrap sx={{ fontWeight: 700 }}>
                {user.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mx: 1 }} />
        <MenuItem onClick={() => handleNavigate("/profile")}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/settings")}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          onClick={handleLogout}
          sx={(theme) => ({
            color: theme.palette.error.main,
            "&:hover": {
              backgroundColor: alpha(theme.palette.error.main, 0.06),
              color: theme.palette.error.main,
            },
          })}
        >
          <ListItemIcon sx={{ color: "error.main" }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountPopover;
