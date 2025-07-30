import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./ui/Sidebar";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import {
  LayoutContainer,
  DefaultLayout,
  MainContent,
  ContentView,
} from "./ui/Wrappers";

type CoreDefaultLayoutProps = {
  children: ReactNode;
};

const CoreDefaultLayout: React.FC<CoreDefaultLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isNavCollapsed, setNavCollapsed] = useState(false);

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    setNavCollapsed(false);
  }, [pathname]);

  return (
    <LayoutContainer>
      <DefaultLayout className="defaultLayoutWrapper">
        <Sidebar
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <MainContent>
          <Header toggleNavCollapsed={toggleNavCollapsed} />
          <ContentView>{children}</ContentView>
          <Footer />
        </MainContent>
      </DefaultLayout>
    </LayoutContainer>
  );
};

export default CoreDefaultLayout;
