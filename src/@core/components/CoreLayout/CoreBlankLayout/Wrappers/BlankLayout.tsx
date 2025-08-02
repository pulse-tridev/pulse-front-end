import { Box } from "@mui/material";

type BlankLayoutProps = {
  children: React.ReactNode;
};

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        bgcolor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};

export default BlankLayout;
