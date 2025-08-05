import { spectrumColors } from "./palette";
import { Theme } from "@mui/material";
import { pxToRem } from "@core/utils";
import { borderRadius } from "../tokens/borderRadius";

export const createComponents = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily:
          "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        scrollbarColor: "#c1c1c1 #f1f1f1",
        "&::-webkit-scrollbar": {
          width: pxToRem(8),
          height: pxToRem(8),
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "4px",
          backgroundColor: "#c1c1c1",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "4px",
          backgroundColor: "#f1f1f1",
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ...theme.typography.button,
        width: "auto",
        display: "inline-flex",
        borderRadius: pxToRem(6), // padrão Spectrum para botões normais (action)
        textTransform: "none" as const,
        minHeight: pxToRem(36),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,
        boxShadow: "none",
        fontWeight: 600,
        fontSize: pxToRem(14),
        lineHeight: 1.5,
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: spectrumColors.gray[100],
        },
      },
      contained: {
        minHeight: pxToRem(32),
        padding: `${pxToRem(8)} ${pxToRem(16)}`,
        fontSize: pxToRem(14),
        borderRadius: pxToRem(999),
        fontWeight: 600,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: spectrumColors.blue[900],
        },
      },
      outlined: {
        borderRadius: pxToRem(6),
        backgroundColor: "transparent",
        fontWeight: 600,
        fontSize: pxToRem(14),
        minHeight: pxToRem(36),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: spectrumColors.gray[50],
        },
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        border: `1px solid ${spectrumColors.gray[200]}`,
        backgroundColor: "#fff",
        boxShadow: "none",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        backgroundColor: "#fff",
        boxShadow: "none",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius.medium,
          backgroundColor: "#fff",
          "& fieldset": {
            borderColor: spectrumColors.gray[400],
          },
          "&:hover fieldset": {
            borderColor: spectrumColors.gray[500],
          },
          "&.Mui-focused fieldset": {
            borderColor: spectrumColors.blue[800],
            borderWidth: "1px",
          },
        },
        "& .MuiInputLabel-root": {
          fontWeight: 500,
          color: spectrumColors.gray[700],
          "&.Mui-focused": {
            color: spectrumColors.blue[500],
          },
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        backgroundColor: "#fff",
        "& fieldset": {
          borderColor: spectrumColors.gray[200],
        },
        "&:hover fieldset": {
          borderColor: spectrumColors.gray[300],
        },
        "&.Mui-focused fieldset": {
          borderColor: spectrumColors.blue[500],
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: pxToRem(12),
        color: spectrumColors.gray[700],
        "&.Mui-focused": {
          color: spectrumColors.blue[500],
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: borderRadius.medium,
        boxShadow: "none",
        border: `1px solid ${spectrumColors.gray[200]}`,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.small,
        margin: `${pxToRem(2)} ${pxToRem(8)}`,
        "&:hover": {
          backgroundColor: spectrumColors.gray[100],
        },
        "&.Mui-selected": {
          backgroundColor: spectrumColors.blue[50],
          "&:hover": {
            backgroundColor: spectrumColors.blue[100],
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        "&:hover": {
          backgroundColor: spectrumColors.gray[100],
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: spectrumColors.gray[800],
        borderRadius: borderRadius.small,
        fontSize: pxToRem(12),
        padding: `${pxToRem(8)} ${pxToRem(12)}`,
      },
      arrow: {
        color: spectrumColors.gray[800],
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: spectrumColors.gray[50],
        "& .MuiTableCell-root": {
          fontWeight: 600,
          color: spectrumColors.gray[700],
          borderBottom: `1px solid ${spectrumColors.gray[200]}`,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${spectrumColors.gray[200]}`,
        padding: `${pxToRem(12)} ${pxToRem(16)}`,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: borderRadius.large,
        boxShadow: "none",
        border: `1px solid ${spectrumColors.gray[200]}`,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: `${pxToRem(24)} ${pxToRem(24)} ${pxToRem(16)} ${pxToRem(24)}`,
        fontWeight: 600,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: `${pxToRem(16)} ${pxToRem(24)}`,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: `${pxToRem(16)} ${pxToRem(24)} ${pxToRem(24)} ${pxToRem(24)}`,
        gap: "8px",
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        backgroundColor: spectrumColors.gray[800],
        color: "#fff",
        fontWeight: 500,
        boxShadow: "none",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.large,
        fontWeight: 500,
        "& .MuiChip-label": {
          padding: `${pxToRem(4)} ${pxToRem(12)}`,
        },
      },
      outlined: {
        borderColor: spectrumColors.gray[300],
        "&:hover": {
          borderColor: spectrumColors.gray[400],
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: pxToRem(44),
        height: pxToRem(24),
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: pxToRem(2),
          "&.Mui-checked": {
            transform: "translateX(20px)",
            "& + .MuiSwitch-track": {
              backgroundColor: spectrumColors.blue[500],
            },
          },
        },
        "& .MuiSwitch-thumb": {
          width: pxToRem(20),
          height: pxToRem(20),
        },
        "& .MuiSwitch-track": {
          borderRadius: pxToRem(12),
          backgroundColor: spectrumColors.gray[300],
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: spectrumColors.gray[400],
        "&.Mui-checked": {
          color: spectrumColors.blue[500],
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: spectrumColors.gray[400],
        "&.Mui-checked": {
          color: spectrumColors.blue[500],
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: spectrumColors.blue[500],
          height: pxToRem(2),
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none" as const,
        fontWeight: 500,
        minHeight: pxToRem(48),
        "&.Mui-selected": {
          color: spectrumColors.blue[500],
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#fff",
        color: spectrumColors.gray[900],
        boxShadow: "none",
        borderBottom: `1px solid ${spectrumColors.gray[200]}`,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: "#fff",
        borderRight: `1px solid ${spectrumColors.gray[200]}`,
        boxShadow: "none",
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: pxToRem(8),
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        marginBottom: pxToRem(4),
        "&:hover": {
          backgroundColor: spectrumColors.gray[100],
        },
        "&.Mui-selected": {
          backgroundColor: spectrumColors.blue[50],
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: spectrumColors.gray[200],
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        boxShadow: "none",
        border: `1px solid ${spectrumColors.gray[200]}`,
        "&:before": {
          display: "none",
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        "&.Mui-expanded": {
          minHeight: pxToRem(48),
        },
      },
      content: {
        margin: `${pxToRem(12)} 0`,
        "&.Mui-expanded": {
          margin: `${pxToRem(12)} 0`,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: `0 ${pxToRem(16)} ${pxToRem(16)} ${pxToRem(16)}`,
      },
    },
  },
});
