import { AuthCardStyled } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthCardRoot = ({ children }: Props) => {
  return <AuthCardStyled>{children}</AuthCardStyled>;
};

export default AuthCardRoot;
