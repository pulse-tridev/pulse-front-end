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

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const pathname = usePathname();
  const [isNavCollapsed, setNavCollapsed] = useState(false);

  const toggleNavCollapsed = useCallback(() => {
    setNavCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setNavCollapsed(false);
  }, [pathname]);

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
