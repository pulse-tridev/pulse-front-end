import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 2,
        px: 3,
        textAlign: "center",
        userSelect: "none",
        // sombra leve para dar profundidade sutil
        boxShadow:
          theme.palette.mode === "light"
            ? "inset 0 1px 3px rgba(0,0,0,0.05)"
            : "inset 0 1px 3px rgba(255,255,255,0.05)",
      })}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontWeight: 400,
          letterSpacing: "0.02em",
          lineHeight: 1.5,
          userSelect: "none",
        }}
      >
        © 2025 Pulse Dashboard. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
