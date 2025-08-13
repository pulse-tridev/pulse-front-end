import { createTheme } from "@mui/material";
import { createPalette } from "./partials/palette";
import { borderRadius } from "./tokens/borderRadius";
import { shadows } from "./partials/shadows";
import { createComponents } from "./partials/components";
import { createTypography } from "./partials/typography";

const baseTheme = createTheme({
  spacing: 8,
  palette: createPalette(),
  shadows,
  shape: {
    borderRadius: borderRadius.medium,
  },
});

const theme = createTheme({
  ...baseTheme,
  components: createComponents(baseTheme),
  typography: createTypography(baseTheme),
});

export default theme;
