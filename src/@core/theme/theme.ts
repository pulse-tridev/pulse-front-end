import { BorderColor } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

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
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#102A43",
      secondary: "#627D98",
      disabled: "#9FB3C8",
    },
    success: {
      main: "#38B000",
      light: "#D9FBE0",
      contrastText: "#fff",
    },
    warning: {
      main: "#F94144",
      light: "#FFE3E3",
      contrastText: "#fff",
    },
    divider: "#E0E6ED",
  },

  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontSize: 14,
    fontWeight: 400,
    h1: { fontSize: 28, fontWeight: 600 },
    h2: { fontSize: 24, fontWeight: 600 },
    h3: { fontSize: 20, fontWeight: 500 },
    h4: { fontSize: 18, fontWeight: 500 },
    h5: { fontSize: 16, fontWeight: 500 },
    h6: { fontSize: 14, fontWeight: 500 },
    subtitle1: { fontSize: 15, color: "#627D98" },
    subtitle2: { fontSize: 14, color: "#9FB3C8" },
    body1: { fontSize: 14 },
    body2: { fontSize: 13 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F8F9FA",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          padding: "8px 18px",
          textTransform: "none",
          fontSize: "0.95rem",
          boxShadow: "none",
          transition: "background-color 0.1s ease, transform 0.1s ease",
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
          border: "1px solid #E6EDF3",
          transition: "0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: "#fff",
          transition: "border-color 0.2s ease",
          "& fieldset": {
            borderColor: "#DCE8F2",
          },
          "&:hover fieldset": {
            borderColor: "#0077B6",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0077B6",
            boxShadow: "0 0 0 1px #0077B6",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#fff",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: 14,
          color: "#627D98",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: 10,
          transition: "background 0.2s ease",
          "&:hover": {
            backgroundColor: "#f1f5f9",
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          backgroundColor: "#102A43",
          borderRadius: 6,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F0F4F8",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          color: "#102A43",
        },
        body: {
          fontSize: 14,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 18,
          padding: 0,
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.08)",
          maxWidth: "600px",
          width: "100%",
          transitionDuration: "300ms",
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "24px",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#102A43",
          fontFamily: "Manrope, sans-serif",
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          fontSize: "1rem",
          color: "#334E68",
          fontFamily: "Manrope, sans-serif",
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "12px 20px",
          fontWeight: 500,
          backgroundColor: "#102A43",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
