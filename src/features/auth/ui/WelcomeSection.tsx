import { Box, Typography } from "@mui/material";

type AuthWelcomeProps = {
  projectName: string;
};

export default function WelcomeSection({ projectName }: AuthWelcomeProps) {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
        {`Bem vindo ao ${projectName}! 👋`}
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        mb={3}
        color="text.secondary"
      >
        Faça login na sua conta e ajude alguém que precisa de você!
      </Typography>
    </Box>
  );
}
