"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
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
  minHeight: "100px",
  backgroundColor: "red",
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
  backgroundColor: theme.palette.background.paper,
  padding: "0 5%",
}));
