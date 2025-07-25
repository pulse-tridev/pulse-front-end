import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PulseLogo from "@core/svg/Logo";

const BrandHeader = () => {
  const theme = useTheme();

  return (
    <Box
      className="brand-header"
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
      <PulseLogo width={40} height={40} />
      <Typography
        component="span"
        sx={{
          ml: 2,
          color: "primary.main",
          fontWeight: 800,
          fontSize: { xs: 20, sm: 24 },
          letterSpacing: 1.5,
          textTransform: "uppercase",
          fontFamily: `"Poppins", "Roboto", sans-serif`,
        }}
      >
        Pulse
      </Typography>
    </Box>
  );
};

export default BrandHeader;
