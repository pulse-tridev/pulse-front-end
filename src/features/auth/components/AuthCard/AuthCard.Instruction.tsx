import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

const AuthCardInstruction = ({ children }: { children: ReactNode }) => (
  <Typography variant="h5" mb={4}>
    {children}
  </Typography>
);

export default AuthCardInstruction;
