"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

export type CoreSnackbarProps = {
  open: boolean;
  message?: React.ReactNode;
  severity?: AlertColor;
  onClose: (
    event?: React.SyntheticEvent | Event,
    reason?: "timeout" | "clickaway"
  ) => void;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
};

export const CoreSnackbar: React.FC<CoreSnackbarProps> = ({
  open,
  message,
  severity = "info",
  onClose,
  autoHideDuration,
  anchorOrigin,
}) => {
  return (
    <Snackbar
      open={open}
      onClose={(_, reason) => onClose(undefined, reason as any)}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
    >
      <Alert onClose={(e) => onClose(e)} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CoreSnackbar;
