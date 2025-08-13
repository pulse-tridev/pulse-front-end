import React from "react";
import { Box, List, Typography, useTheme } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import NavList from "./NavList";
import { RouteConfigData } from "@core/routes/types";

type VerticalNavProps = { routesConfig: RouteConfigData[] };

const VerticalNav = ({ routesConfig }: VerticalNavProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const isActive = (url?: string) => !!url && pathname === url;
  const onNavigate = (url: string) => router.push(url);

  return (
    <List component="nav" sx={{ p: 0 }}>
      <Box sx={{ px: 3, py: 2, mb: 1 }}>
        <Typography
          variant="overline"
          sx={{
            fontWeight: 600,
            color: "text.secondary",
            textTransform: "uppercase",
          }}
        >
          Navegação
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <NavList
          routes={routesConfig}
          isActive={isActive}
          onNavigate={onNavigate}
        />
      </Box>
    </List>
  );
};

export default VerticalNav;
