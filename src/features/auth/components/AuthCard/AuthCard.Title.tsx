import { Typography } from "@mui/material";
import { ReactNode } from "react";

const AuthCardTitle = ({ children }: { children: ReactNode }) => (
  <Typography variant="h1" mb={2} textAlign="left">
    {children}
  </Typography>
);

export default AuthCardTitle;
