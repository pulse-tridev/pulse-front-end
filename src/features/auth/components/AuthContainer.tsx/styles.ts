"use client";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthContainerStyled = styled(Card)(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  minHeight: "630px",
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  overflow: "visible",
}));

export const AuthContainerBrand = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "550px",
  position: "relative",
}));

export const AuthContainerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "490px",
}));
