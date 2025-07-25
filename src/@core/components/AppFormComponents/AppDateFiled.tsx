import React from "react";
import { Field, FieldHookConfig } from "formik";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";

type AppDateFiledProps = TextFieldProps &
  FieldHookConfig<string> & {
    [x: string]: any;
  };
const AppDateFiled = (props: AppDateFiledProps) => {
  return (
    <Field
      component={DatePicker}
      variant="outlined"
      inputVariant="outlined"
      format="YYYY-MM-DD"
      mask="____-__-__"
      autoOk
      {...props}
      renderInput={(params: any) => (
        <TextField className={props.className} {...params} />
      )}
    />
  );
};

export default AppDateFiled;
