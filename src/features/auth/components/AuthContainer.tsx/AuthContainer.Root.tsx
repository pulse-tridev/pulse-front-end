import { AuthContainerStyled } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthContainerRoot = ({ children }: Props) => {
  return <AuthContainerStyled>{children}</AuthContainerStyled>;
};

export default AuthContainerRoot;
