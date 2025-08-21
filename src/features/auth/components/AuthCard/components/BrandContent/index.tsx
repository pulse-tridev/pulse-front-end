"use client";

import * as S from "./styles";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BrandContent = () => {
  return (
    <>
      <S.CardStyled>
        <CardMedia
          component="img"
          image={"/images/backgrounds/blue-bg.png"}
          alt={"signin bg"}
        />

        <S.CardContentStyled>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-1px",
              textTransform: "none",
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              color: "white",
              mb: 2,
            }}
          >
            Pulse.ai
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              maxWidth: "70%",
              color: "white",
              mb: 2,
            }}
          >
            Inteligência que simplifica sua gestão clínica.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "70%",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Centralize pacientes, agendas e insights em uma plataforma segura e
            inteligente — para que você foque no cuidado, enquanto a tecnologia
            cuida do resto.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                backdropFilter: "blur(6px)",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
              onClick={() => console.log("conheça a plataforma")}
            >
              Conheça a plataforma
            </Button>
          </Box>
        </S.CardContentStyled>
      </S.CardStyled>
      {/* <S.MascotBox>
        <Image
          src="/images/illustrations/mascot/mascot-1.png"
          alt="Mascote Vitta"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </S.MascotBox> */}
    </>
  );
};

export default BrandContent;
