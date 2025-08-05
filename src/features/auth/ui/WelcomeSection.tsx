import { Box, Typography } from "@mui/material";

type AuthWelcomeProps = {
  projectName: string;
};

export default function WelcomeSection({ projectName }: AuthWelcomeProps) {
  return (
    <Box textAlign="center">
      <Typography variant="h1" mb={2}>
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
