import React, { forwardRef } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

// Extensão das props do TextField para incluir propriedades específicas do formulário
export interface AppTextFieldProps extends Omit<TextFieldProps, "error"> {
  error?: boolean;
  helperText?: string;
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
const CoreTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    const { error = false, helperText, ...otherProps } = props;

    return (
      <TextField
        ref={ref}
        error={error}
        helperText={helperText}
        {...otherProps}
      />
    );
  }
);

// Nome de exibição para debugging
CoreTextField.displayName = "AppTextField";

export default CoreTextField;
