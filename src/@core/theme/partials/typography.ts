import { Theme } from "@mui/material";

// Adobe React Spectrum Typography System
// const manropeFontStack = [
//   "var(--font-manrope)",
//   "-apple-system",
//   "BlinkMacSystemFont",
//   "Segoe UI",
//   "Roboto",
//   "Helvetica Neue",
//   "Arial",
//   "sans-serif",
// ].join(",");

const manropeFontStack = "var(--font-manrope), sans-serif";

export const createTypography = (theme: Theme) => ({
  fontFamily: manropeFontStack,
  fontSize: 14,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(32),
    fontWeight: 700,
    lineHeight: 1.25, // 40px / 32px -> unitless as recommended
    letterSpacing: "-0.02em",
    margin: 0,
    color: theme.vars ? theme.vars.palette.text.primary : undefined,
  },
  h2: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(24), // 24px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(20), // 20px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0em",
  },
  h4: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(16), // 16px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
  },
  h5: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(14), // 14px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
  },
  h6: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(12), // 12px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },
  subtitle1: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(16), // 16px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    color: theme.vars ? theme.vars.palette.text.secondary : undefined,
  },
  subtitle2: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(14), // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  body1: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(14), // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  body2: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(12), // 12px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.02em",
  },
  button: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(14), // 14px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    textTransform: "none" as const,
  },
  caption: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(12), // 12px
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },
  overline: {
    fontFamily: manropeFontStack,
    fontSize: theme.typography.pxToRem(10), // 10px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
});
