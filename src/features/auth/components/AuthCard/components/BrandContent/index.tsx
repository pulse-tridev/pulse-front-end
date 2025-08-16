"use client";
import * as S from "./styles";
import { Box } from "@mui/material";
import Image from "next/image";
import CustomCard from "../Teste";

const BrandContent = () => {
  return (
    <>
      <S.Content>
        <Box sx={{ width: "100%", height: "100%" }}>
          <CustomCard
            imageUrl="/images/backgrounds/clinic-bg.png" // substitua pela sua imagem
            title="Capturing Moments, Creating Memories"
            onButtonClick={() => alert("Back to website")}
          />
        </Box>
      </S.Content>
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
