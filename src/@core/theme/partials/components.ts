import React from "react";
import { Theme } from "@mui/material";
import type { AlertProps } from "@mui/material/Alert";
import type { ContainerProps } from "@mui/material/Container";
import type { SnackbarOrigin } from "@mui/material/Snackbar";
import { borderRadius } from "../tokens/borderRadius";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const createComponents = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily:
          "var(--font-manrope), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: theme.vars.palette.background.default,
        scrollbarColor: "#c1c1c1 #f1f1f1",
        "&::-webkit-scrollbar": {
          width: theme.typography.pxToRem(8),
          height: theme.typography.pxToRem(8),
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
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        ...theme.typography.button,
        width: "auto",
        display: "inline-flex",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none" as const,
        minHeight: theme.typography.pxToRem(36),
        padding: theme.spacing(0.75, 2),
        boxShadow: "none",
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(14),
        lineHeight: 1.5,
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: theme.vars.palette.action.hover,
        },
      },
      contained: {
        minHeight: theme.typography.pxToRem(32),
        padding: theme.spacing(1, 2),
        fontSize: theme.typography.pxToRem(14),
        borderRadius: 999,
        fontWeight: 600,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.vars.palette.primary.dark,
        },
      },
      outlined: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "transparent",
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(14),
        minHeight: theme.typography.pxToRem(36),
        padding: theme.spacing(0.75, 2),
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.vars.palette.action.hover,
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.vars.palette.divider}`,
        backgroundColor: theme.vars.palette.background.paper,
        boxShadow: "none",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.vars
          ? theme.vars.palette.background.paper
          : "#fff",
        boxShadow: "none",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        // Ajustes globais também impactam X-Date-Pickers porque eles usam TextField/OutlinedInput
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius.medium,
          backgroundColor: theme.vars.palette.background.paper,
          "& fieldset": {
            borderColor: theme.vars.palette.divider,
          },
          "&:hover fieldset": {
            borderColor: theme.vars.palette.text.secondary,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.vars.palette.primary.main,
            borderWidth: "1px",
          },
        },
        "& .MuiInputLabel-root": {
          fontWeight: 500,
          color: theme.vars.palette.text.secondary,
          "&.Mui-focused": {
            color: theme.vars.palette.primary.main,
          },
        },
      },
    },
  },
  // X-Date-Pickers (usam slots próprios, mas herdando cores e radius)
  MuiPickersDay: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        "&.Mui-selected": {
          backgroundColor: theme.vars.palette.primary.main,
          color: theme.vars.palette.common.white,
        },
        "&.MuiPickersDay-today": {
          border: `1px solid ${theme.vars.palette.primary.main}`,
        },
      },
    },
  },
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        "& .MuiPickersCalendarHeader-root": {
          padding: theme.spacing(1),
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        backgroundColor: theme.vars.palette.background.paper,
        "& fieldset": {
          borderColor: theme.vars.palette.divider,
        },
        "&:hover fieldset": {
          borderColor: theme.vars.palette.text.disabled,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.vars.palette.primary.main,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(12),
        color: theme.vars.palette.text.secondary,
        "&.Mui-focused": {
          color: theme.vars.palette.primary.main,
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
        border: `1px solid ${theme.vars.palette.divider}`,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        margin: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
        "&:hover": {
          backgroundColor: theme.vars.palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
          "&:hover": {
            backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.16)`,
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
          backgroundColor: theme.vars.palette.action.hover,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.vars.palette.grey[800],
        borderRadius: theme.shape.borderRadius,
        fontSize: theme.typography.pxToRem(12),
        padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
      },
      arrow: {
        color: theme.vars.palette.grey[800],
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: theme.vars.palette.grey[50],
        "& .MuiTableCell-root": {
          fontWeight: 600,
          color: theme.vars.palette.text.secondary,
          borderBottom: `1px solid ${theme.vars.palette.divider}`,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: "none",
        border: `1px solid ${theme.vars.palette.divider}`,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(
          2
        )} ${theme.spacing(3)}`,
        fontWeight: 600,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(
          3
        )} ${theme.spacing(3)}`,
        gap: theme.spacing(1),
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        backgroundColor: theme.vars.palette.grey[800],
        color: theme.vars.palette.common.white,
        fontWeight: 500,
        boxShadow: "none",
      },
      message: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
      },
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { vertical: "bottom", horizontal: "right" } as const,
      autoHideDuration: 3000,
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.small,
        height: theme.typography.pxToRem(6),
        backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
      },
      bar: {
        borderRadius: borderRadius.small,
        backgroundColor: theme.vars.palette.primary.main,
      },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        color: theme.vars.palette.primary.main,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.large,
        fontWeight: 500,
        "& .MuiChip-label": {
          padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
        },
      },
      outlined: {
        borderColor: theme.vars.palette.divider,
        "&:hover": {
          borderColor: theme.vars.palette.text.disabled,
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: theme.typography.pxToRem(44),
        height: theme.typography.pxToRem(24),
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: theme.typography.pxToRem(2),
          "&.Mui-checked": {
            transform: "translateX(20px)",
            "& + .MuiSwitch-track": {
              backgroundColor: theme.vars.palette.primary.main,
            },
          },
        },
        "& .MuiSwitch-thumb": {
          width: theme.typography.pxToRem(20),
          height: theme.typography.pxToRem(20),
        },
        "& .MuiSwitch-track": {
          borderRadius: theme.typography.pxToRem(12),
          backgroundColor: theme.vars.palette.grey[300],
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: theme.vars.palette.grey[400],
        "&.Mui-checked": {
          color: theme.vars.palette.primary.main,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: theme.vars.palette.grey[400],
        "&.Mui-checked": {
          color: theme.vars.palette.primary.main,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: theme.vars.palette.primary.main,
          height: theme.typography.pxToRem(2),
        },
      },
    },
  },
  // MuiPagination: defaults removed to avoid TS union mismatch; set per usage if needed
  MuiTablePagination: {
    defaultProps: {
      rowsPerPageOptions: [5, 10, 25, 50],
      labelRowsPerPage: "Linhas por página:",
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none" as const,
        fontWeight: 500,
        minHeight: theme.typography.pxToRem(48),
        "&.Mui-selected": {
          color: theme.vars.palette.primary.main,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.vars.palette.background.paper,
        color: theme.vars.palette.text.primary,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.vars.palette.background.paper,
        borderRight: `1px solid ${theme.vars.palette.divider}`,
        boxShadow: "none",
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1),
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "always" as const,
    },
    styleOverrides: {
      root: {
        cursor: "pointer",
        textDecorationColor: "inherit",
        "&:hover": {
          textDecorationColor: "inherit",
        },
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg" as ContainerProps["maxWidth"],
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: theme.typography.pxToRem(56),
        "@media (min-width:600px)": {
          minHeight: theme.typography.pxToRem(64),
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        marginBottom: theme.spacing(0.5),
        "&:hover": {
          backgroundColor: theme.vars.palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: theme.vars.palette.divider,
      },
    },
  },
  MuiAlert: {
    defaultProps: {
      variant: "filled" as AlertProps["variant"],
      iconMapping: {
        success: React.createElement(CheckCircleOutlineIcon, {
          fontSize: "small",
        }),
        error: React.createElement(ErrorOutlineIcon, { fontSize: "small" }),
        info: React.createElement(InfoOutlinedIcon, { fontSize: "small" }),
        warning: React.createElement(WarningAmberIcon, { fontSize: "small" }),
      },
    },
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        "&.MuiAlert-standardSuccess, &.MuiAlert-filledSuccess": {
          backgroundColor: `rgba(${theme.vars.palette.success.mainChannel} / 1)`,
          color: theme.vars.palette.common.white,
        },
        "&.MuiAlert-standardError, &.MuiAlert-filledError": {
          backgroundColor: `rgba(${theme.vars.palette.error.mainChannel} / 1)`,
          color: theme.vars.palette.common.white,
        },
        "&.MuiAlert-standardWarning, &.MuiAlert-filledWarning": {
          backgroundColor: `rgba(${theme.vars.palette.warning.mainChannel} / 1)`,
          color: theme.vars.palette.common.white,
        },
        "&.MuiAlert-standardInfo, &.MuiAlert-filledInfo": {
          backgroundColor: `rgba(${theme.vars.palette.info.mainChannel} / 1)`,
          color: theme.vars.palette.common.white,
        },
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      separator: {
        color: theme.vars.palette.text.disabled,
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
      },
      li: {
        "& a": {
          color: theme.vars.palette.text.secondary,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        backgroundColor: theme.vars.palette.grey[300],
        color: theme.vars.palette.text.primary,
      },
      colorDefault: {
        backgroundColor: theme.vars.palette.grey[300],
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.24)`,
        borderTopWidth: 2,
        borderRadius: borderRadius.small,
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        color: theme.vars.palette.text.secondary,
        "&.Mui-active": {
          color: theme.vars.palette.primary.main,
        },
        "&.Mui-completed": {
          color: theme.vars.palette.primary.main,
        },
      },
      iconContainer: {
        "& .MuiSvgIcon-root": {
          color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.32)`,
          "&.Mui-active": {
            color: theme.vars.palette.primary.main,
          },
          "&.Mui-completed": {
            color: theme.vars.palette.primary.main,
          },
        },
      },
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: {
        border: `2px solid ${theme.vars.palette.background.paper}`,
        padding: 0,
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.small,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        boxShadow: "none",
        border: `1px solid ${theme.vars.palette.divider}`,
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
          minHeight: theme.typography.pxToRem(48),
        },
      },
      content: {
        margin: `${theme.spacing(1.5)} 0`,
        "&.Mui-expanded": {
          margin: `${theme.spacing(1.5)} 0`,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: `0 ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(
          2
        )}`,
      },
    },
  },
});
