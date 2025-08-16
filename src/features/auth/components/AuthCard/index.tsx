import { Box, Typography } from "@mui/material";
import * as S from "./styles";
import Image from "next/image";
import BrandContent from "./components/BrandContent";
import SigninForm from "../Forms/SigninForm";

const AuthCard = () => {
  return (
    <S.Container>
      <S.BrandSection>
        <BrandContent />
      </S.BrandSection>

      <S.AuthSection>
        <Typography variant="h2">Fazer Login</Typography>
        <SigninForm />
      </S.AuthSection>
    </S.Container>
  );
};

export default AuthCard;
