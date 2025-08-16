import React from "react";
import * as S from "./styles";
import LayoutBackground from "./components/LayoutBackground";

type CommonProps = {
  children: React.ReactNode;
};

type BackgroundProps = {
  imgSrc: string;
};

const Root = ({ children }: CommonProps) => <S.Wrapper>{children}</S.Wrapper>;

const Header = ({ children }: CommonProps) => <S.Header>{children}</S.Header>;

const Body = ({ children }: CommonProps) => <S.Body>{children}</S.Body>;

const Footer = ({ children }: CommonProps) => <S.Footer>{children}</S.Footer>;

const Background = ({ imgSrc }: BackgroundProps) => (
  <LayoutBackground backgroundImage={imgSrc} />
);

const UnauthenticatedLayout = {
  Root,
  Header,
  Body,
  Footer,
  Background,
};

export default UnauthenticatedLayout;
