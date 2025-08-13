import React, { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme,
  alpha,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavList from "./NavList";
import { RouteGroup } from "@core/routes/types";

type Props = {
  group: RouteGroup;
  level: number;
  isActive: (url?: string) => boolean;
  onNavigate: (url: string) => void;
};

export default function NavGroup({
  group,
  level,
  isActive,
  onNavigate,
}: Props) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <ListItem disablePadding key={group.id}>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{
            py: theme.spacing(1.5),
            px: theme.spacing(3),
            mx: theme.spacing(1.5),
            my: theme.spacing(0.5),
            borderRadius: theme.shape.borderRadius,
            transition: theme.transitions.create(
              ["background-color", "box-shadow"],
              {
                duration: theme.transitions.duration.short,
              }
            ),
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.12),
              boxShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.15)}`,
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.4)}`,
            },
            pl: theme.spacing(level * 4),
          }}
          aria-expanded={open}
          aria-haspopup="true"
        >
          <ListItemIcon
            sx={{
              color: theme.palette.text.secondary,
              minWidth: 40,
              transition: theme.transitions.create("color", {
                duration: theme.transitions.duration.short,
              }),
            }}
          >
            {group.icon && <group.icon />}
          </ListItemIcon>

          <ListItemText primary={group.title} />

          {open ? (
            <ExpandLess sx={{ color: theme.palette.primary.main }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.text.secondary }} />
          )}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavList
            routes={group.children!}
            level={level + 1}
            isActive={isActive}
            onNavigate={onNavigate}
          />
        </List>
      </Collapse>
    </>
  );
}
