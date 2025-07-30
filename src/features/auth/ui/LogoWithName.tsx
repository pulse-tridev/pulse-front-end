import CoreBrandLogo from "@core/components/CoreBranding/CoreBrandLogo";
import CoreBrandName from "@core/components/CoreBranding/CoreBrandName";
import { Box } from "@mui/material";

type LogoWithNameProps = {
  name: string;
};

const LogoWithName: React.FC<LogoWithNameProps> = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CoreBrandLogo width={60} height={60} />
      <CoreBrandName>{name}</CoreBrandName>
    </Box>
  );
};

export default LogoWithName;
