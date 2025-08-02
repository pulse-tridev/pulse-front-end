import React from "react";
import { Box, List, Typography } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import NavList from "./components/NavList";
import { RouteConfigData } from "@core/types/RouteConfig";

type Props = { routesConfig: RouteConfigData[] };

export default function VerticalNav({ routesConfig }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (url?: string) => !!url && pathname === url;
  const onNavigate = (url: string) => router.push(url);

  return (
    <List
      component="nav"
      sx={{
        position: "relative",
        p: 0,
        height: "calc(100vh - 100px) !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
      }}
    >
      <Box>
        <Box sx={{ px: 3, py: 2, mb: 1 }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "text.secondary",
              textTransform: "uppercase",
            }}
          >
            Navegação
          </Typography>
        </Box>

        <NavList
          routes={routesConfig}
          isActive={isActive}
          onNavigate={onNavigate}
        />
      </Box>
    </List>
  );
}
