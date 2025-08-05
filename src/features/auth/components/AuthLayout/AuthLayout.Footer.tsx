import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutFooter = ({ children }: Props) => {
  return <S.Footer>{children}</S.Footer>;
};

export default AuthLayoutFooter;
