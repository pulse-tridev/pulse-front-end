"use client";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  maxHeight: "630px",
  zIndex: 1,
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: theme.palette.background.default,
  background: `
    radial-gradient(
      circle at bottom left,
      rgba(0, 0, 0, 0.08) 0%,
      rgba(0, 0, 0, 0.04) 25%,
      transparent 60%
    )
  `,
  backgroundColor: "#fdfdfd",
  overflow: "visible",
}));

export const BrandSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "550px",
  position: "relative",
}));

export const AuthSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(3),
  width: "490px",
  padding: theme.spacing(8),
}));

export const DentroDeAuthSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));
