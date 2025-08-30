import React, { useMemo, useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme,
  alpha,
  Popover,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavList from "./NavList";
import { RouteGroup } from "@core/routes/types";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  group: RouteGroup;
  level: number;
  isActive: (url?: string) => boolean;
  onNavigate: (url: string) => void;
  collapsed?: boolean;
};

export default function NavGroup({
  group,
  level,
  isActive,
  onNavigate,
  collapsed = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();

  return (
    <>
      <ListItem disablePadding key={group.id}>
        <ListItemButton
          onClick={(e) => {
            if (collapsed) {
              setAnchorEl(e.currentTarget);
              setOpen(true);
            } else {
              setOpen(!open);
            }
          }}
          sx={{
            py: collapsed ? theme.spacing(0.25) : theme.spacing(1.25),
            px: collapsed ? theme.spacing(0.75) : theme.spacing(3),
            mx: theme.spacing(1),
            my: theme.spacing(0.25),
            borderRadius: collapsed ? 6 : theme.shape.borderRadius,
            transition: theme.transitions.create(
              ["background-color", "box-shadow"],
              {
                duration: theme.transitions.duration.short,
              }
            ),
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              boxShadow: "none",
            },
            "&:focus-visible": {
              outline: "none",
              boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.4)}`,
            },
            pl: collapsed ? theme.spacing(0) : theme.spacing(level * 4),
          }}
          aria-expanded={open}
          aria-haspopup="true"
        >
          <ListItemIcon
            sx={{
              color: theme.palette.text.secondary,
              minWidth: 0,
              width: collapsed ? 22 : 40,
              height: collapsed ? 22 : 40,
              transition: theme.transitions.create("color", {
                duration: theme.transitions.duration.short,
              }),
            }}
          >
            {group.icon && <group.icon />}
          </ListItemIcon>

          {!collapsed && <ListItemText primary={group.title} />}

          {!collapsed &&
            (open ? (
              <ExpandLess sx={{ color: theme.palette.primary.main }} />
            ) : (
              <ExpandMore sx={{ color: theme.palette.text.secondary }} />
            ))}
        </ListItemButton>
      </ListItem>

      <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavList
            routes={group.children!}
            level={level + 1}
            isActive={isActive}
            onNavigate={onNavigate}
            collapsed={collapsed}
          />
        </List>
      </Collapse>

      {collapsed && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          PaperProps={{
            sx: (theme) => ({
              mt: 0.5,
              ml: 0.5,
              borderRadius: 1.5,
              boxShadow: theme.shadows[8],
              minWidth: 180,
              backgroundImage: "none",
            }),
          }}
        >
          <Box sx={{ py: 0.5 }}>
            <NavList
              routes={group.children!}
              level={level + 1}
              isActive={isActive}
              onNavigate={(url) => {
                setOpen(false);
                onNavigate(url);
              }}
              collapsed={false}
            />
          </Box>
        </Popover>
      )}
    </>
  );
}
