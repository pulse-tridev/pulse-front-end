import { Box, Card, CardContent } from "@mui/material";
import SigninForm from "src/features/auth/components/SigninForm";
import Illustrations from "src/features/auth/ui/Illustrations";
import LogoWithName from "src/features/auth/ui/LogoWithName";
import WelcomeSection from "src/features/auth/ui/WelcomeSection";

const cardStyles = {
  width: "100%",
  maxWidth: 460,
  borderRadius: 5,
  padding: 4,
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0 15px 45px rgba(0,0,0,0.1)",
};

export default function LoginPage() {
  const projectName = "Pulse";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Card elevation={12} sx={cardStyles}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <LogoWithName name={projectName} />
          </Box>

          <WelcomeSection projectName={"Pulse Dashboard"} />

          <SigninForm />
        </CardContent>
      </Card>

      <Illustrations />
    </Box>
  );
}
