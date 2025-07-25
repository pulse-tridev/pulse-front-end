import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

type AppScrollbarProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
};

const AppScrollbar: React.FC<AppScrollbarProps> = ({
  children,
  sx,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0,0,0,0.3)",
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppScrollbar;
