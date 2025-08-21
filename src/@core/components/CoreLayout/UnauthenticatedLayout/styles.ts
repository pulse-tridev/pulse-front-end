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
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(245, 245, 245, 0.95) 40%,
      rgba(250, 250, 250, 1) 100%
    )
  `,
  backdropFilter: "blur(12px)",
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
  paddingLeft: theme.spacing(20),
  paddingRight: theme.spacing(20),

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "40px",
  backgroundColor: theme.palette.background.default,
  // padding: "0 5%",
  paddingLeft: theme.spacing(20),
  paddingRight: theme.spacing(20),

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
