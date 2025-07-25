import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AppFixedFooter: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 Pulse Dashboard. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default AppFixedFooter;
