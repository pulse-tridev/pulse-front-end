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
      main: "#0A8FDC",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F04F47",
    },
    background: {
      default: "#F4F7FE",
      paper: "#FFFFFF",
    },
    text: {
      primary: "rgb(17, 24, 39)",
      secondary: "rgb(107, 114, 128)",
      disabled: "rgb(149, 156, 169)",
    },
    success: {
      main: "#11C15B",
      light: "#D9F5E5",
    },
    warning: {
      main: "#FF5252",
      light: "#FFECDC",
    },
    divider: "rgba(224, 224, 224, 1)",
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    fontWeight: 400,
    h1: {
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "capitalize",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0px 10px 10px 4px rgba(0, 0, 0, 0.04)",
          "& .MuiCardContent-root:last-of-type": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 4,
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
