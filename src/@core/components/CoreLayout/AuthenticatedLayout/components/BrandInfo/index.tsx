import React from "react";
import { Box, useTheme, IconButton, Tooltip } from "@mui/material";
import AppBrandLogo from "@core/components/CoreBranding/CoreBrandLogo";
import AppBrandName from "@core/components/CoreBranding/CoreBrandName";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Props = { collapsed?: boolean; onToggleCollapse?: () => void };

export const BrandInfo: React.FC<Props> = ({ collapsed, onToggleCollapse }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: collapsed ? 1 : 2,
        px: collapsed ? 1 : 2,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "space-between",
        height: { xs: 56, sm: 64 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AppBrandLogo
          width={collapsed ? 28 : 36}
          height={collapsed ? 28 : 36}
        />
        {!collapsed && <AppBrandName>Pulse</AppBrandName>}
      </Box>

      {!collapsed && (
        <Tooltip title="Recolher menu">
          <IconButton size="small" onClick={onToggleCollapse}>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      {collapsed && (
        <Tooltip title="Expandir menu">
          <IconButton size="small" onClick={onToggleCollapse}>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
