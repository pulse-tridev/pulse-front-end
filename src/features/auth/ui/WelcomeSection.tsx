import { Box, Typography } from "@mui/material";

type AuthWelcomeProps = {
  projectName: string;
};

export default function WelcomeSection({ projectName }: AuthWelcomeProps) {
  return (
    <Box textAlign="center">
      <Typography
        variant="h5"
        fontWeight={500}
        color="text.secondary"
        letterSpacing={1}
        mb={1}
      >
        Bem-vindo
      </Typography>

      <Typography variant="h4" fontWeight={700} color="text.primary" mb={2}>
        {projectName}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth={360}
        mx="auto"
      >
        Acesse sua conta e continue oferecendo cuidado com tecnologia e empatia.
      </Typography>
    </Box>
  );
}
