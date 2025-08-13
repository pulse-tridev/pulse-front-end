import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Container,
  LayoutWrapper,
  Content,
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
    setNavCollapsed(!isNavCollapsed);
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
        <Content>
          <Header toggleNavCollapsed={toggleNavCollapsed} />
          <ContentView>{children}</ContentView>
          {/* <Footer /> */}
        </Content>
      </Container>
    </LayoutWrapper>
  );
};

export default AuthenticatedLayout;
