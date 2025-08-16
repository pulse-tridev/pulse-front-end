"use client";
import { Box, styled } from "@mui/material";

export const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  
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
