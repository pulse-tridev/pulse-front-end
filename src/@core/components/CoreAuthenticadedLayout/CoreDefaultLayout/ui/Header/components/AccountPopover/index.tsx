import type { IconButtonProps } from "@mui/material/IconButton";
import React, { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem, { menuItemClasses } from "@mui/material/MenuItem";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// Dados mockados do usuário
const user = {
  displayName: "João Silva",
  email: "joao.silva@pulse.com",
  photoURL:
    "https://i.postimg.cc/d1S3Hfx7/female-doctor-hospital-with-stethoscope.jpg",
};

// Menu de opções padrão
const defaultMenuData = [
  {
    label: "Meu Perfil",
    href: "/profile",
    icon: <AccountCircleIcon sx={{ width: 20, height: 20 }} />,
  },
  {
    label: "Configurações",
    href: "/settings",
    icon: <SettingsIcon sx={{ width: 20, height: 20 }} />,
  },
];

export type AppAccountPopoverProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
};

export function AppAccountPopover({
  data = defaultMenuData,
  sx,
  ...other
}: AppAccountPopoverProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(
    null
  );

  const handleOpenPopover = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setOpenPopover(event.currentTarget);
    },
    []
  );

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const handleClickItem = useCallback(
    (path: string) => {
      handleClosePopover();
      router.push(path);
    },
    [handleClosePopover, router]
  );

  const handleLogout = useCallback(() => {
    handleClosePopover();
    // Implementar logout real aqui
    console.log("Fazendo logout...");
    // router.push('/signIn');
  }, [handleClosePopover]);

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        sx={[
          (theme) => ({
            p: 0,
            width: { xs: 44, sm: 48 },
            height: { xs: 44, sm: 48 },
            borderRadius: "50%",
            background: `conic-gradient(
        from 180deg at 50% 50%,
        ${theme.palette.primary.main},
        ${theme.palette.secondary.main},
        ${theme.palette.success.main},
        ${theme.palette.warning.main},
        ${theme.palette.primary.main}
      )`,
            transition: theme.transitions.create(["transform", "box-shadow"], {
              duration: theme.transitions.duration.short,
            }),
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
            },
          }),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...other}
        aria-label="Conta do usuário"
      >
        <Avatar
          src={user.photoURL}
          alt={user.displayName}
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            bgcolor: theme.palette.primary.main,
            fontSize: "1.1rem",
            fontWeight: 600,
            border: `2px solid ${theme.palette.background.paper}`,
          })}
        >
          {user.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: (theme) => ({
              width: 280,
              mt: 1,
              borderRadius: theme.shape.borderRadius,
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 12px 24px -4px rgba(0,0,0,0.4)"
                  : "0 12px 24px -4px rgba(145,158,171,0.24)",
              border: `1px solid ${theme.palette.divider}`,
              overflow: "hidden",
              backgroundColor: theme.palette.background.paper,
            }),
          },
        }}
      >
        <Box
          sx={(theme) => ({
            p: 3,
            pb: 2,
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(145,158,171,0.08) 0%, rgba(145,158,171,0.02) 100%)"
                : "linear-gradient(135deg, rgba(99,115,129,0.04) 0%, rgba(99,115,129,0.01) 100%)",
          })}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Avatar
              src={user.photoURL}
              alt={user.displayName}
              sx={(theme) => ({
                width: 48,
                height: 48,
                bgcolor: theme.palette.primary.main,
                fontSize: "1.2rem",
                fontWeight: 600,
                boxShadow: `0 4px 12px ${theme.palette.primary.main}25`,
              })}
            >
              {user.displayName.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="subtitle1"
                noWrap
                sx={{ fontWeight: 600, color: "text.primary", lineHeight: 1.2 }}
              >
                {user.displayName}
              </Typography>
              <Typography
                variant="body2"
                noWrap
                sx={{
                  color: "text.secondary",
                  opacity: 0.8,
                  fontSize: "0.875rem",
                }}
              >
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mx: 2, borderColor: "divider", opacity: 0.6 }} />

        <MenuList
          disablePadding
          sx={(theme) => ({
            p: 2,
            gap: 0.5,
            display: "flex",
            flexDirection: "column",
            [`& .${menuItemClasses.root}`]: {
              px: 2,
              py: 1.5,
              gap: 2,
              borderRadius: theme.shape.borderRadius,
              color: theme.palette.text.secondary,
              fontSize: "0.95rem",
              fontWeight: 500,
              minHeight: 48,
              transition: theme.transitions.create(
                ["background-color", "color", "transform"],
                {
                  duration: theme.transitions.duration.short,
                }
              ),
              "&:hover": {
                color: theme.palette.text.primary,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(145,158,171,0.08)"
                    : "rgba(99,115,129,0.08)",
                transform: "translateX(4px)",
              },
              [`&.${menuItemClasses.selected}`]: {
                color: theme.palette.primary.main,
                bgcolor: `${theme.palette.primary.main}12`,
                fontWeight: 600,
                "&:hover": {
                  bgcolor: `${theme.palette.primary.main}20`,
                },
              },
            },
          })}
        >
          {data.map((option) => (
            <MenuItem
              key={option.label}
              selected={option.href === pathname}
              onClick={() => handleClickItem(option.href)}
            >
              {option.icon}
              {option.label}
            </MenuItem>
          ))}
        </MenuList>

        <Divider sx={{ mx: 2, borderColor: "divider", opacity: 0.6 }} />

        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            color="error"
            size="large"
            variant="text"
            startIcon={<LogoutIcon sx={{ width: 20, height: 20 }} />}
            onClick={handleLogout}
            sx={(theme) => ({
              justifyContent: "flex-start",
              px: 2,
              py: 1.5,
              gap: 2,
              borderRadius: theme.shape.borderRadius,
              fontSize: "0.95rem",
              fontWeight: 500,
              color: theme.palette.text.secondary,
              minHeight: 48,
              transition: theme.transitions.create(
                ["background-color", "color", "transform"],
                {
                  duration: theme.transitions.duration.short,
                }
              ),
              "&:hover": {
                color: theme.palette.error.main,
                bgcolor: `${theme.palette.error.main}08`,
                transform: "translateX(4px)",
              },
            })}
          >
            Sair
          </Button>
        </Box>
      </Popover>
    </>
  );
}
