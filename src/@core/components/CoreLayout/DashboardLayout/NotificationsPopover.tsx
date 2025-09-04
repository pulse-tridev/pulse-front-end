"use client";
import React from "react";
import { useRouter } from "next/navigation";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

import CoreScrollbar from "src/@core/components/CoreScrollbar";

type NotificationType = "email" | "system" | "appointment" | "default";

type NotificationItem = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read?: boolean;
  avatarUrl?: string;
  timeAgo?: string;
};

const demoNotifications: NotificationItem[] = [
  {
    id: "1",
    type: "email",
    title: "Carmen Parksouth",
    message: "Hey, pode verificar os últimos documentos postados no grupo?",
    timeAgo: "1 dia",
  },
  {
    id: "2",
    type: "system",
    title: "Sistema",
    message: "Atualização do sistema concluída com sucesso.",
    timeAgo: "2 dias",
  },
  {
    id: "3",
    type: "appointment",
    title: "Heidi Turner",
    message: "PFA .FIG com os documentos...",
    timeAgo: "4 dias",
  },
  {
    id: "4",
    type: "default",
    title: "Lembrete",
    message: "Realizar backup semanal.",
    timeAgo: "1 semana",
  },
];

function getTypeIcon(type: NotificationType) {
  switch (type) {
    case "email":
      return <EmailIcon sx={{ fontSize: 18, color: "primary.main" }} />;
    case "system":
      return (
        <SystemSecurityUpdateGoodIcon
          sx={{ fontSize: 18, color: "success.main" }}
        />
      );
    case "appointment":
      return <NotificationsIcon sx={{ fontSize: 18, color: "warning.main" }} />;
    default:
      return (
        <NotificationsIcon sx={{ fontSize: 18, color: "text.secondary" }} />
      );
  }
}

const NotificationsPopover = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Simula contagem de novas (não lidas)
  const unreadCount = demoNotifications.filter((n) => !n.read).length;

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const notifications = demoNotifications.slice(0, 10);
  const ITEM_MIN_HEIGHT = 88;
  const MAX_VISIBLE_NOTIFICATIONS = 5;
  const shouldScroll = notifications.length > MAX_VISIBLE_NOTIFICATIONS;
  const listMaxHeight = shouldScroll
    ? ITEM_MIN_HEIGHT * MAX_VISIBLE_NOTIFICATIONS
    : undefined;

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-label="Notificações"
        aria-controls={open ? "dashboard-notifications-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        size="medium"
        sx={{ mr: 1 }}
      >
        <Badge
          badgeContent={unreadCount}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              minWidth: 18,
              height: 18,
              fontSize: 11,
              lineHeight: "18px",
              fontWeight: 700,
              border: (theme) => `2px solid ${theme.palette.background.paper}`,
            },
          }}
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        id="dashboard-notifications-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: (theme) => ({
              width: 360,
              maxWidth: "calc(100vw - 24px)",
              p: 0,
              overflow: "hidden",
            }),
          },
        }}
      >
        <Box
          sx={(theme) => ({
            p: 1,
          })}
        >
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            Notificações
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Você tem {unreadCount} novas
          </Typography>
        </Box>
        <Divider />

        <CoreScrollbar
          sx={{
            maxHeight: listMaxHeight,
            overflowX: "hidden",
            overflowY: shouldScroll ? "auto" : "visible",
          }}
        >
          {notifications.length === 0 ? (
            <Box sx={{ p: 2, color: "text.secondary" }}>
              <Typography variant="body2">Sem notificações</Typography>
            </Box>
          ) : (
            notifications.map((n, idx) => (
              <MenuItem
                key={n.id}
                onClick={handleClose}
                sx={(theme) => ({
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1.25,
                  minHeight: ITEM_MIN_HEIGHT,
                  mx: 0,
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.06),
                  },
                  ...(idx < notifications.length - 1
                    ? {
                        borderBottom: `1px solid ${alpha(
                          theme.palette.divider,
                          0.5
                        )}`,
                      }
                    : {}),
                })}
              >
                <ListItemIcon sx={{ minWidth: 26, mr: 0.25 }}>
                  {getTypeIcon(n.type)}
                </ListItemIcon>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      fontSize: 13.5,
                      color: "text.primary",
                    }}
                  >
                    {n.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      letterSpacing: 0.15,
                      color: (theme) =>
                        alpha(theme.palette.text.secondary, 0.9),
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      minHeight: 36,
                    }}
                  >
                    {n.message}
                  </Typography>
                </Box>
                {n.timeAgo && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 1, whiteSpace: "nowrap" }}
                  >
                    {n.timeAgo}
                  </Typography>
                )}
              </MenuItem>
            ))
          )}
        </CoreScrollbar>

        <Divider />
        <Box
          sx={(theme) => ({
            p: 1,
            display: "flex",
            justifyContent: "center",
          })}
        >
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              router.push("#");
            }}
          >
            <Typography variant="body2">Ver todas</Typography>
          </Link>
        </Box>
      </Menu>
    </>
  );
};

export default NotificationsPopover;
