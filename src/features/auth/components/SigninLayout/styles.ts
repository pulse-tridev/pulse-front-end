"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const SigninContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  zIndex: 1,
}));

export const SigninCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 460,
  padding: theme.spacing(4),
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0 15px 45px rgba(0,0,0,0.1)",
  elevation: 12,
}));

export const SigninCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));
