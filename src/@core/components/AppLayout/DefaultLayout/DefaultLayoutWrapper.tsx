import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type DefaultLayoutWrapperProps = {
  children: ReactNode;
  className?: string;
};

const DefaultLayoutWrapper: React.FC<DefaultLayoutWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultLayoutWrapper;
