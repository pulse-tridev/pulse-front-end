import React from "react";
import {
  Box,
  List,
  Typography,
  useTheme,
  Tooltip,
  Divider,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import NavList from "./NavList";
import { RouteConfigData } from "@core/routes/types";

type VerticalNavProps = {
  routesConfig: RouteConfigData[];
  collapsed?: boolean;
};

const VerticalNav = ({ routesConfig, collapsed = false }: VerticalNavProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const isActive = (url?: string) => !!url && pathname === url;
  const onNavigate = (url: string) => router.push(url);

  return (
    <List component="nav" sx={{ p: 0 }}>
      <Box sx={{ px: collapsed ? 0.5 : 2, py: collapsed ? 1 : 1.5, mb: 1 }}>
        {!collapsed && <Divider sx={{ opacity: 0.5 }} />}
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <NavList
          routes={routesConfig}
          isActive={isActive}
          onNavigate={onNavigate}
          collapsed={collapsed}
        />
      </Box>
    </List>
  );
};

export default VerticalNav;
