import React from "react";
import { Box, useTheme } from "@mui/material";
import AppBrandLogo from "@core/components/CoreBranding/CoreBrandLogo";
import AppBrandName from "@core/components/CoreBranding/CoreBrandName";

export const BrandInfo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 3,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: 56, sm: 70 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxSizing: "border-box",
      }}
    >
      <AppBrandLogo width={40} height={40} />
      <AppBrandName>Pulse</AppBrandName>
    </Box>
  );
};
