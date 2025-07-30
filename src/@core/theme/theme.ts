import { createTheme } from "@mui/material/styles";

// Declarações de módulo para estender os tipos do Material-UI
declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    fontWeight?: number;
  }
}

export const theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      main: "#0077B6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00B4D8",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA", // cinza zero (quase branco)
      paper: "#FFFFFF",
    },
    text: {
      primary: "#102A43", // azul profundo, elegante
      secondary: "#627D98", // cinza azulado moderno
      disabled: "#9FB3C8", // tom neutro suave
    },
    success: {
      main: "#38B000", // verde vivo moderno
      light: "#D9FBE0",
      contrastText: "#fff",
    },
    warning: {
      main: "#F94144", // vermelho vibrante
      light: "#FFE3E3",
      contrastText: "#fff",
    },
    divider: "#DCE8F2", // azul bem claro
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    fontWeight: 400,
    h1: { fontSize: 22, fontWeight: 600 },
    h2: { fontSize: 20, fontWeight: 500 },
    h3: { fontSize: 18, fontWeight: 500 },
    h4: { fontSize: 16, fontWeight: 500 },
    h5: { fontSize: 14, fontWeight: 500 },
    h6: { fontSize: 12, fontWeight: 500 },
    subtitle1: { fontSize: 14 },
    subtitle2: { fontSize: 16 },
    body1: { fontSize: 14 },
    body2: { fontSize: 12 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "capitalize",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
          "& .MuiCardContent-root:last-of-type": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 9,
        },
      },
    },
  },
});

export default theme;
