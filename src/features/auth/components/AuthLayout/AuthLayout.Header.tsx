import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutHeader = ({ children }: Props) => {
  return <S.Header>{children}</S.Header>;
};

export default AuthLayoutHeader;
