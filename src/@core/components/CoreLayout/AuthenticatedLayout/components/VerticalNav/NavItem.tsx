import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { RouteItem } from "@core/routes/types";

type Props = {
  item: RouteItem;
  level: number;
  isActive: boolean;
  onNavigate: (url: string) => void;
  collapsed?: boolean;
};

const NavItem = ({
  item,
  level,
  isActive,
  onNavigate,
  collapsed = false,
}: Props) => {
  const theme = useTheme();

  const button = (
    <ListItemButton
      onClick={() => onNavigate(item.url!)}
      sx={{
        px: collapsed ? 0.75 : 3,
        py: collapsed ? 0.25 : 1.25,
        height: collapsed ? 40 : "auto",
        borderRadius: collapsed ? 1.5 : theme.shape.borderRadius,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "flex-start",
        gap: collapsed ? 0 : 1,
        backgroundImage: "none",
        backgroundColor: isActive
          ? alpha(theme.palette.primary.main, 0.08)
          : "transparent",
        color: isActive
          ? theme.palette.primary.main
          : theme.palette.text.primary,
        fontWeight: isActive ? 600 : 500,
        boxShadow: isActive
          ? `inset 0 0 0 1px ${alpha(theme.palette.primary.main, 0.24)}`
          : "none",
        transition: theme.transitions.create(
          ["background-color", "color", "box-shadow", "transform"],
          {
            duration: theme.transitions.duration.short,
          }
        ),
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          boxShadow: "none",
          transform: collapsed ? "translateY(-1px)" : "none",
        },
        "&:focus-visible": {
          outline: "none",
          boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.4)}`,
        },
      }}
    >
      <ListItemIcon
        sx={{
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          minWidth: 0,
          width: 22,
          height: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: theme.transitions.create(["color", "transform"], {
            duration: theme.transitions.duration.short,
          }),
        }}
      >
        {item.icon && <item.icon sx={{ fontSize: 18 }} />}
      </ListItemIcon>

      {!collapsed && (
        <ListItemText
          primary={item.title}
          sx={{
            ml: 1,
            "& .MuiListItemText-primary": {
              fontWeight: isActive ? 600 : 500,
              color: isActive
                ? theme.palette.primary.main
                : theme.palette.text.primary,
              letterSpacing: 0.1,
              userSelect: "none",
              transition: theme.transitions.create(["color", "font-weight"], {
                duration: theme.transitions.duration.short,
              }),
            },
          }}
        />
      )}

      {isActive && !collapsed && (
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.35)}`,
            ml: 1,
          }}
        />
      )}
    </ListItemButton>
  );

  return (
    <ListItem disablePadding key={item.id} sx={{ width: "100%" }}>
      {collapsed ? (
        <Tooltip title={item.title} placement="right">
          {button}
        </Tooltip>
      ) : (
        button
      )}
    </ListItem>
  );
};

export default NavItem;
