import { Typography } from "@mui/material";

type CoreBrandNameProps = {
  children: React.ReactNode;
};

const CoreBrandName: React.FC<CoreBrandNameProps> = ({ children }) => {
  return (
    <Typography
      component="span"
      sx={{
        ml: 2,
        color: "primary.main",
        fontWeight: 800,
        fontSize: { xs: 20, sm: 24 },
        letterSpacing: 1.5,
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  );
};

export default CoreBrandName;
