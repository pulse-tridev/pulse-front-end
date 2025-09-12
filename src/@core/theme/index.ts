import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { ptBR as corePtBR } from "@mui/material/locale";
import { ptBR as pickersPtBR } from "@mui/x-date-pickers/locales";
import { createPalette } from "./partials/palette";
import { borderRadius } from "./tokens/borderRadius";
import { shadows } from "./partials/shadows";
import { createComponents } from "./partials/components";
import { createTypography } from "./partials/typography";

let baseTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data" },
  colorSchemes: {
    light: {
      palette: createPalette("light"),
    },
  },
  spacing: 8,
  shadows,
  shape: {
    borderRadius: borderRadius.medium,
  },
});

let theme = createTheme({
  ...baseTheme,
  components: {
    ...createComponents(baseTheme),
  },
  typography: createTypography(baseTheme),
});

theme = createTheme(theme, corePtBR, pickersPtBR);

theme = responsiveFontSizes(theme);

export default theme;
