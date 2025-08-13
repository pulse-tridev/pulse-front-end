import * as S from "./styles";

type Props = {
  children?: React.ReactNode;
};

const AuthContainerBrand = ({ children }: Props) => {
  return <S.AuthContainerBrand>{children}</S.AuthContainerBrand>;
};

export default AuthContainerBrand;
