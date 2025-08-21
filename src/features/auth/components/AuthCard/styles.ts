"use client";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  maxHeight: "630px",
  height: "600px",
  zIndex: 1,
  // borderRadius: theme.shape.borderRadius,
  // borderRadius: theme.spacing(2),
  background: theme.palette.background.default,
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
