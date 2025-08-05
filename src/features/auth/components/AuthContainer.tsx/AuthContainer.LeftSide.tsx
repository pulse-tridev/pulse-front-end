import { AuthContainerLeftSideStyled } from "./styles";

type Props = {
  children?: React.ReactNode;
};

const AuthContainerLeftSide = ({ children }: Props) => {
  return <AuthContainerLeftSideStyled>{children}</AuthContainerLeftSideStyled>;
};

export default AuthContainerLeftSide;
