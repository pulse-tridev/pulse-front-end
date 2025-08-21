"use client";
import { Box, Card, CardContent, styled } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  border: "none",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: "0px !important",
  borderBottomRightRadius: "0px !important",
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(6),
  background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
}));

export const MascotBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 32,
  left: 60,
  transform: "translateX(-50%)",
  zIndex: 999,
  width: 500,
  height: 500,
}));
