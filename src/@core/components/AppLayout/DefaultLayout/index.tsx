import React, { ReactNode, useEffect, useState } from "react";
import AppContentView from "../../AppContentView";

import AppHeader from "./AppHeader/index";

import { usePathname } from "next/navigation";
import DefaultLayoutContainer from "./DefaultLayoutContainer";
import DefaultLayoutWrapper from "./DefaultLayoutWrapper";
import AppSidebar from "./AppSidebar";
import MainContent from "./MainContent";
import AppFixedFooter from "./AppFixedFooter";

type Props = {
  children: ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [isNavCollapsed, setNavCollapsed] = useState(false);

  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    setNavCollapsed(false);
  }, [pathname]);

  return (
    <DefaultLayoutContainer>
      <DefaultLayoutWrapper className="defaultLayoutWrapper">
        <AppSidebar
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <MainContent>
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </MainContent>
      </DefaultLayoutWrapper>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
