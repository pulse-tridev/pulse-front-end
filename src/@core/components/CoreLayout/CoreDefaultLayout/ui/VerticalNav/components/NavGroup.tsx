import React, { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  alpha,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RouteGroup } from "@core/types/RouteConfig";
import NavList from "./NavList";

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

  return (
    <>
      <ListItem disablePadding key={group.id}>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{
            py: 1.5,
            px: 3,
            mx: 1.5,
            my: 0.5,
            borderRadius: 2,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: alpha("#0A8FDC", 0.08),
              transform: "translateX(4px)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "text.secondary",
              minWidth: 40,
              transition: "color 0.2s ease-in-out",
            }}
          >
            {group.icon && <group.icon />}
          </ListItemIcon>
          <ListItemText
            primary={group.title}
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "14px",
                fontWeight: 500,
                color: "text.primary",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* chama NavList recursivamente */}
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
