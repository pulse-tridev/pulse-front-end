"use client";
import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  IconButton,
  Divider,
  ListSubheader,
  Box,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import { MenuConfig, MenuGroup, MenuItem, MenuNested } from "./types";

export const drawerWidth = 230;
export const collapsedWidth = 62;

type Props = {
  menuItems: MenuConfig;
  collapsed: boolean;
  onToggleCollapse: () => void;
};

export default function Sidebar({
  menuItems,
  collapsed,
  onToggleCollapse,
}: Props) {
  const [expandedKey, setExpandedKey] = React.useState<string | null>(null);

  const isNested = (i: MenuItem): i is MenuNested =>
    (i as MenuNested).children !== undefined;
  const getItemKey = (i: MenuItem) => (i as any).label as string;
  const pathname = (
    typeof window !== "undefined" ? window.location.pathname : undefined
  ) as string | undefined;

  React.useEffect(() => {
    if (!pathname) return;
    // auto expand group containing active child
    const findInConfig = (items: MenuConfig) => {
      for (const entry of items) {
        if ((entry as any).section && (entry as any).items) {
          for (const sub of (entry as any).items as MenuItem[]) {
            if (
              isNested(sub) &&
              sub.children.some((c) => c.href === pathname)
            ) {
              setExpandedKey(getItemKey(sub));
              return;
            }
          }
        } else {
          const mi = entry as MenuItem;
          if (isNested(mi) && mi.children.some((c) => c.href === pathname)) {
            setExpandedKey(getItemKey(mi));
            return;
          }
        }
      }
    };
    findInConfig(menuItems);
  }, [pathname, menuItems]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          boxSizing: "border-box",
          height: "100vh",
          borderRadius: 0,
        },
      }}
    >
      {/* Espaço para compensar a AppBar fixa */}
      <Toolbar />
      <Divider />

      {/* Lista de menus */}
      <List
        subheader={
          Array.isArray(menuItems) &&
          menuItems.some((i: any) => (i as MenuGroup).section)
            ? undefined
            : undefined
        }
        sx={
          collapsed
            ? {
                px: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : undefined
        }
      >
        {menuItems.map((entry, idx) => {
          const group = entry as MenuGroup;
          if (group.section && group.items) {
            return (
              <li key={`${group.section}-${idx}`}>
                <ul style={{ padding: 0, margin: 0 }}>
                  <ListSubheader
                    component="div"
                    disableSticky
                    sx={(theme) => ({
                      px: collapsed ? 0 : 2,
                      mt: collapsed ? 0.5 : 1.5,
                      mb: collapsed ? 0.5 : 1.5,
                      lineHeight: 1.8,
                      fontSize: 11.5,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                      color: theme.palette.text.secondary,
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      "&::after": {
                        content: '""',
                        display: "block",
                        flex: 1,
                        minWidth: 0,
                        ml: collapsed ? 0 : 1,
                        borderTop: `1px solid ${alpha(
                          theme.palette.divider,
                          0.6
                        )}`,
                      },
                    })}
                  >
                    {!collapsed && (
                      <Box component="span" sx={{ flexShrink: 0 }}>
                        {group.section}
                      </Box>
                    )}
                  </ListSubheader>

                  <List
                    component="div"
                    disablePadding
                    sx={
                      collapsed
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            px: 0,
                            "& > *": { my: 0.5 },
                          }
                        : { my: 1.5 }
                    }
                  >
                    {group.items.map((item) => {
                      const key = getItemKey(item as MenuItem);
                      const controlledOpen =
                        collapsed && isNested(item as MenuItem)
                          ? expandedKey === key
                          : undefined;
                      const handleToggle =
                        collapsed && isNested(item as MenuItem)
                          ? (nextOpen: boolean) => {
                              setExpandedKey((prev) =>
                                nextOpen ? key : prev === key ? null : prev
                              );
                            }
                          : undefined;
                      return (
                        <SidebarItem
                          key={key}
                          item={item as MenuItem}
                          collapsed={collapsed}
                          open={controlledOpen}
                          onToggle={handleToggle}
                        />
                      );
                    })}
                  </List>
                </ul>
              </li>
            );
          }
          return (
            <SidebarItem
              key={(entry as any).label}
              item={entry as MenuItem}
              collapsed={collapsed}
            />
          );
        })}
      </List>
    </Drawer>
  );
}
