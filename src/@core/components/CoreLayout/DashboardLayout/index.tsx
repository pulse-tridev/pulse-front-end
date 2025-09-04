"use client";
import {
  Box,
  Drawer,
  List,
  Toolbar,
  ListSubheader,
  Box as MuiBox,
} from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar, { collapsedWidth, drawerWidth } from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { menuConfig } from "@core/routes/menuConfigt";
import { MenuConfig, MenuGroup, MenuItem } from "../../../routes/types";

// removed local drawerWidth to use the one exported from Sidebar

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar
        onToggleMobile={() => setMobileOpen(!mobileOpen)}
        sidebarWidth={collapsed ? collapsedWidth : drawerWidth}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Sidebar Desktop colapsável */}
      <Sidebar
        menuItems={menuConfig}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Sidebar Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {(() => {
            const items: MenuConfig = menuConfig as MenuConfig;
            const isGroup = (x: MenuItem | MenuGroup): x is MenuGroup =>
              (x as MenuGroup).section !== undefined;
            return items.map((entry, idx) =>
              isGroup(entry) ? (
                <li key={`${entry.section}-${idx}`}>
                  <ul style={{ padding: 0, margin: 0 }}>
                    <ListSubheader
                      component="div"
                      disableSticky
                      sx={{ px: 2, mt: 1.5, mb: 1 }}
                    >
                      <MuiBox
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <MuiBox component="span">{entry.section}</MuiBox>
                        <MuiBox
                          sx={{
                            flex: 1,
                            height: 1,
                            bgcolor: "divider",
                            opacity: 0.6,
                          }}
                        />
                      </MuiBox>
                    </ListSubheader>
                    {entry.items.map((item: MenuItem) => (
                      <SidebarItem
                        key={item.label}
                        item={item}
                        collapsed={false}
                      />
                    ))}
                  </ul>
                </li>
              ) : (
                <SidebarItem key={entry.label} item={entry} collapsed={false} />
              )
            );
          })()}
        </List>
      </Drawer>

      {/* Conteúdo */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* espaço da navbar */}
        {children}
      </Box>
    </Box>
  );
}
