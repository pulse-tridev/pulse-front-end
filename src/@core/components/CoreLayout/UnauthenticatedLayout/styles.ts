"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: theme.palette.background.paper,
  background: `
    radial-gradient(
      circle at bottom left,
      rgba(0, 0, 0, 0.08) 0%,
      rgba(0, 0, 0, 0.04) 25%,
      transparent 60%
    )
  `,
  backgroundColor: "#fdfdfd",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "relative",
}));

export const Header = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "60px",
  padding: "0 5%",
}));

export const Body = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "transparent",
  padding: "0 5%",
}));

export const Footer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "35px",
  // backgroundColor: theme.palette.background.default,
  padding: "0 5%",
}));
