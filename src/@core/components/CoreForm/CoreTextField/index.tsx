import React, { forwardRef } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { InputLabel, InputLabelProps } from "@mui/material";

// Extensão das props do TextField para incluir propriedades específicas do formulário
export interface AppTextFieldProps extends Omit<TextFieldProps, "error"> {
  error?: boolean;
  helperText?: string;
  topLabel?: React.ReactNode;
  topLabelProps?: InputLabelProps;
}

/**
 * Componente AppTextField otimizado para React Hook Form
 *
 * Características:
 * - Compatible com React Hook Form através de forwardRef
 * - Mantém todas as funcionalidades do TextField do MUI
 * - Tipagem TypeScript robusta
 * - Reutilizável em diferentes contextos
 */
export const CoreTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    const {
      error = false,
      helperText,
      topLabel,
      topLabelProps,
      id,
      ...otherProps
    } = props;

    const mergedLabelProps: InputLabelProps | undefined = topLabel
      ? {
          ...(topLabelProps as InputLabelProps),
          htmlFor: topLabelProps?.htmlFor ?? id,
          sx: { mb: 1, ...(topLabelProps?.sx as any) },
        }
      : undefined;

    return (
      <>
        {topLabel != null && (
          <InputLabel {...mergedLabelProps}>{topLabel}</InputLabel>
        )}
        <TextField
          ref={ref}
          id={id}
          error={error}
          helperText={helperText}
          {...otherProps}
        />
      </>
    );
  }
);

// Nome de exibição para debugging
CoreTextField.displayName = "CoreTextField";
