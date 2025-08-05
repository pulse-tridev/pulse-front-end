import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutBody = ({ children }: Props) => {
  return <S.Body>{children}</S.Body>;
};

export default AuthLayoutBody;
