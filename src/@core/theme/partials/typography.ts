import { pxToRem } from "@core/utils";
import { Theme, TypographyVariants } from "@mui/material";
import { spectrumColors } from "./palette";

// Adobe React Spectrum Typography System
const manropeFontStack = [
  "Manrope",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
].join(",");

export const createTypography = (theme: Theme): TypographyVariants => ({
  fontFamily: manropeFontStack,
  fontSize: 14,
  htmlFontSize: 16,
  pxToRem,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(32),
    fontWeight: 700,
    lineHeight: pxToRem(40), // 40px
    letterSpacing: "-0.02em",
    margin: 0,
    color: spectrumColors.gray[900],
  },
  h2: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(24), // 24px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(20), // 20px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0em",
  },
  h4: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(16), // 16px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
  },
  h5: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(14), // 14px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
  },
  h6: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(12), // 12px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },
  subtitle1: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(16), // 16px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    color: spectrumColors.gray[700],
  },
  subtitle2: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(14), // 14px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  body1: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(14), // 14px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  body2: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(12), // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.02em",
  },
  button: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(14), // 14px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    textTransform: "none" as const,
  },
  caption: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(12), // 12px
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },
  overline: {
    fontFamily: manropeFontStack,
    fontSize: pxToRem(10), // 10px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
});
