import Illustrations from "../../ui/Illustrationss";
import { SigninContainer, SigninCard, SigninCardContent } from "./styles";

export interface SigninLayoutProps {
  children: React.ReactNode;
}

export default function SigninLayout({ children }: SigninLayoutProps) {
  return (
    <>
      <SigninContainer>
        <SigninCard>
          <SigninCardContent>{children}</SigninCardContent>
        </SigninCard>
      </SigninContainer>
      <Illustrations />
    </>
  );
}
