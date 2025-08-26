import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Container,
  LayoutWrapper,
  ContentWrapper,
  Header,
  Sidebar,
  ContentView,
} from "./components";
import { useAuth } from "src/features/auth/hooks/useAuth";

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const pathname = usePathname();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const { accessToken, refresh } = useAuth();

  const toggleNavCollapsed = useCallback(() => {
    setNavCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setNavCollapsed(false);
  }, [pathname]);

  // Reidrata o accessToken ao montar a área autenticada (caso só exista cookie httpOnly)
  useEffect(() => {
    if (!accessToken) {
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutWrapper>
      <Container>
        <Sidebar
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <ContentWrapper>
          <Header toggleNavCollapsed={toggleNavCollapsed} />
          <ContentView>{children}</ContentView>
          {/* <Footer /> */}
        </ContentWrapper>
      </Container>
    </LayoutWrapper>
  );
};

export default AuthenticatedLayout;
