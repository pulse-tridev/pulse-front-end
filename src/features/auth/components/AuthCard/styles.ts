"use client";
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  maxHeight: "630px",
  height: "600px",
  zIndex: 1,
  background: theme.palette.background.paper,
  overflow: "visible",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

export const BrandSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "550px",
  position: "relative",

  [theme.breakpoints.down(1043)]: {
    display: "none",
  },
}));

export const AuthSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(3),
  width: "490px",
  padding: theme.spacing(8),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
    width: "100%",
    height: "100%",
  },
}));

export const DentroDeAuthSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));
