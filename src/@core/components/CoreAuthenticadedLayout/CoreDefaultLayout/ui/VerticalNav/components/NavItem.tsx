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
import { RouteItem } from "@core/types/RouteConfig";

type Props = {
  item: RouteItem;
  level: number;
  isActive: boolean;
  onNavigate: (url: string) => void;
};

const NavItem = ({ item, level, isActive, onNavigate }: Props) => {
  const theme = useTheme();

  return (
    <ListItem disablePadding key={item.id} sx={{ width: "100%" }}>
      <ListItemButton
        onClick={() => onNavigate(item.url!)}
        sx={{
          pl: level > 0 ? theme.spacing(6) : theme.spacing(3),
          pr: theme.spacing(3),
          py: theme.spacing(1.5),
          borderRadius: theme.shape.borderRadius,
          position: "relative",
          backgroundColor: isActive
            ? alpha(theme.palette.primary.main, 0.1)
            : "transparent",
          borderLeft: isActive
            ? `4px solid ${theme.palette.primary.main}`
            : "4px solid transparent",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          fontWeight: isActive ? 600 : 400,
          boxShadow: isActive
            ? `0 0 6px ${alpha(theme.palette.primary.main, 0.25)}`
            : "none",
          transition: theme.transitions.create(
            ["background-color", "color", "box-shadow", "border-left"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.main,
            boxShadow: `0 0 6px ${alpha(theme.palette.primary.main, 0.15)}`,
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.5)}`,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
            minWidth: 40,
            transition: theme.transitions.create("color", {
              duration: theme.transitions.duration.short,
            }),
          }}
        >
          {item.icon && <item.icon />}
        </ListItemIcon>

        <ListItemText
          primary={item.title}
          sx={{
            "& .MuiListItemText-primary": {
              fontWeight: isActive ? 600 : 400,
              color: isActive
                ? theme.palette.primary.main
                : theme.palette.text.primary,
              transition: theme.transitions.create(["color", "font-weight"], {
                duration: theme.transitions.duration.short,
              }),
              userSelect: "none",
            },
          }}
        />

        {isActive && (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
              boxShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.3)}`,
              ml: 1,
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
