import { Typography } from "@mui/material";
import { ReactNode } from "react";

const AuthCardSubtitle = ({ children }: { children: ReactNode }) => (
  <Typography variant="subtitle1" maxWidth={360} mb={1} textAlign={"left"}>
    {children}
  </Typography>
);

export default AuthCardSubtitle;
