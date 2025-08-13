"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthCardStyled = styled(Box)(({ theme }) => ({
  // height: "100%",
  // width: "100%",
  // padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

export const AuthCardTitle = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: theme.spacing(8),
  backgroundColor: "transparent",
}));
