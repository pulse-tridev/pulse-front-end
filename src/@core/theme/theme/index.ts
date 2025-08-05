// src/theme/theme.ts

import { createPalette } from "../partials/palette";
import { createTypography } from "../partials/typography";
import { createComponents } from "../partials/components";

import { createTheme, ThemeOptions } from "@mui/material";
import { shadows } from "../partials/shadows";
import { borderRadius } from "../tokens/borderRadius";

const palette = createPalette();

const baseTheme = createTheme({
  spacing: 8,
  palette,
  shape: {
    borderRadius: borderRadius.medium,
  },
  shadows,
});

const themeWithComponents = createTheme({
  ...baseTheme,
  components: createComponents(baseTheme),
  typography: createTypography(baseTheme),
});

export const theme = themeWithComponents;

export default theme;
