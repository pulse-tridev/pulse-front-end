"use client";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthContainerStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  minHeight: "630px",
  zIndex: 1,
}));

export const AuthContainerLeftSideStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "520px",
}));

export const AuthContainerRightSideStyled = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "520px",
}));
