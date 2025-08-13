import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

const AuthContainerContent = ({ children }: Props) => {
  return <S.AuthContainerContent>{children}</S.AuthContainerContent>;
};

export default AuthContainerContent;
