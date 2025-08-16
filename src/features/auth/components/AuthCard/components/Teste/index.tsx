"use client";
// components/CustomCard.tsx
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomCardProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  onButtonClick?: () => void;
}

export default function CustomCard({
  imageUrl,
  title,
  subtitle,
  onButtonClick,
}: CustomCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
      }}
    >
      {/* Imagem de fundo */}
      <CardMedia component="img" image={imageUrl} alt={title} />

      {/* Conteúdo do card sobre a imagem */}
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}
      >
        <Box style={{ width: "100%" }}>
          {""}
          {/* <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<ArrowForwardIcon />}
              onClick={onButtonClick}
              
            >
              Back to website
            </Button>
          </Box> */}
        </Box>

        <Typography
          variant="h2"
          sx={{ width: "100%", textAlign: "center", color: "white" }}
        >
          {""}
        </Typography>

        <Typography
          variant="h3"
          sx={{ width: "100%", textAlign: "right", color: "white" }}
        >
          Pulse.ai
        </Typography>
      </CardContent>
    </Card>
  );
}
