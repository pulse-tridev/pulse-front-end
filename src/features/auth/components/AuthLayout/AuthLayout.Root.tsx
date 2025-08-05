import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutRoot = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default AuthLayoutRoot;
