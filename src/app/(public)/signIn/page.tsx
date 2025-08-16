import UnauthenticatedLayout from "@core/components/CoreLayout/UnauthenticatedLayout";
import { Box, Typography } from "@mui/material";
import AuthCard from "src/features/auth/components/AuthCard";

export default function SignInPage() {
  const projectName = "Pulse Dashboard - Gestão Inteligente";
  return (
    <UnauthenticatedLayout.Root>
      {/* <UnauthenticatedLayout.Background imgSrc="/images/backgrounds/bg-4k.png" /> */}
      {/* <UnauthenticatedLayout.Header>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h3>Pulse.ai</h3>
        </Box>
      </UnauthenticatedLayout.Header> */}

      <UnauthenticatedLayout.Body>
        <AuthCard />
      </UnauthenticatedLayout.Body>

      <UnauthenticatedLayout.Footer>
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} Vitta. All rights reserved.
        </Typography>
      </UnauthenticatedLayout.Footer>
    </UnauthenticatedLayout.Root>
  );
}
