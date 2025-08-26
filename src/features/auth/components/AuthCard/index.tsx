import { Link, Typography } from "@mui/material";
import * as S from "./styles";
import BrandContent from "./components/BrandContent";
import SigninForm from "../Forms/SigninForm";

const AuthCard = () => {
  return (
    <S.Container>
      <S.BrandSection>
        <BrandContent />
      </S.BrandSection>

      <S.AuthSection>
        <Typography variant="h1">Fazer Login</Typography>
        <Typography variant="subtitle2" color="textDisabled">
          Novo usuário? <Link href="#">Crie uma conta</Link>
        </Typography>
        <SigninForm />
        <Typography variant="body2">
          <Link href="#">Obter ajuda para fazer login</Link>
        </Typography>
      </S.AuthSection>
    </S.Container>
  );
};

export default AuthCard;
