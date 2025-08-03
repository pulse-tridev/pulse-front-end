import SigninForm from "src/features/auth/components/SigninForm";
import SigninLayout from "src/features/auth/components/SigninLayout";
import WelcomeSection from "src/features/auth/ui/WelcomeSection";

export default function SigninPage() {
  const projectName = "Pulse Dashboard - Gestão Inteligente";

  return (
    <SigninLayout>
      <WelcomeSection projectName={projectName} />
      <SigninForm />
    </SigninLayout>
  );
}
