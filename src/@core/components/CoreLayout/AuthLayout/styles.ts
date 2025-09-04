"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // background: `
  //   linear-gradient(
  //     135deg,
  //     rgba(255, 255, 255, 0.9) 0%,
  //     rgba(245, 245, 245, 0.95) 40%,
  //     rgba(250, 250, 250, 1) 100%
  //   )
  // `,
  backgroundColor: theme.palette.background.default,
  backdropFilter: "blur(12px)",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

export const Header = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),

  [theme.breakpoints.down(1200)]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
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
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  width: "100%",

  [theme.breakpoints.down(1200)]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));
