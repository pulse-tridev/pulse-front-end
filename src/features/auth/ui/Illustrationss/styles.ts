"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const IllustrationContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
