import { AuthContainerRightSideStyled } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthContainerRightSide = ({ children }: Props) => {
  return <AuthContainerRightSideStyled>{children}</AuthContainerRightSideStyled>;
};

export default AuthContainerRightSide;
