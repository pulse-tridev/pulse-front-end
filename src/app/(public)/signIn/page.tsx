import UnauthenticatedLayout from "@core/components/CoreLayout/UnauthenticatedLayout";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import AuthCard from "src/features/auth/components/AuthCard";

export default function SignInPage() {
  const projectName = "Pulse Dashboard - Gestão Inteligente";
  return (
    <UnauthenticatedLayout.Root>
      {/* <UnauthenticatedLayout.Background imgSrc="/images/backgrounds/bg-4k.png" /> */}
      <UnauthenticatedLayout.Header>
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
      </UnauthenticatedLayout.Header>

      <UnauthenticatedLayout.Body>
        <AuthCard />
      </UnauthenticatedLayout.Body>

      <UnauthenticatedLayout.Footer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
          }}
        >
          {/* Left side - Branding / Copyright */}
          <Typography variant="body1" color="text.secondary">
            © {new Date().getFullYear()} Pulse Dashboard – Gestão Inteligente
          </Typography>

          {/* Right side - Inline professional links */}
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Link
              href="/help-center"
              underline="hover"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Central de Ajuda
            </Link>
            <Link
              href="/terms"
              underline="hover"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy"
              underline="hover"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Política de Privacidade
            </Link>
            <Link
              href="/contact"
              underline="hover"
              color="text.secondary"
              sx={{ "&:hover": { color: "text.primary" } }}
            >
              Contato
            </Link>
          </Box>
        </Box>
      </UnauthenticatedLayout.Footer>
    </UnauthenticatedLayout.Root>
  );
}
