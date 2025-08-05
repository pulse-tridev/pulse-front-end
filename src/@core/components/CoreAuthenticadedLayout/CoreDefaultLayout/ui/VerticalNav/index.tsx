import React from "react";
import { Box, List, Typography, useTheme } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import NavList from "./components/NavList";
import { RouteConfigData } from "@core/types/RouteConfig";

type Props = { routesConfig: RouteConfigData[] };

export default function VerticalNav({ routesConfig }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const isActive = (url?: string) => !!url && pathname === url;
  const onNavigate = (url: string) => router.push(url);

  return (
    <List
      component="nav"
      sx={{
        height: `calc(100vh - ${theme.spacing(12)})`, // exemplo: 100px = 12*8
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        overflowY: "auto",
        // opcional: sombra sutil na borda direita para separação
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box sx={{ px: 3, py: 2, mb: 1 }}>
        <Typography
          variant="overline"
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: theme.palette.text.secondary,
            textTransform: "uppercase",
            letterSpacing: 0.5,
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
}
