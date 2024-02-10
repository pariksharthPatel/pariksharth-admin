import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from "moment";
const DateTime = ({
  control,
  name,
  label,
  required,
  disabled,
  readOnly,
  placeholder,
  error,
  rules = {},
}) => {
  const {
    field: { onChange, value },
  } = useController({
    control: control,
    name,
    rules: {
      required: {
        value: required,
        message: `${label} is required `,
      },
      ...rules,
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
   <DateTimePicker 
   
   label={label}
      placeholder={placeholder}
      fullWidth
      required={required}
      disabled={disabled}
      error={Boolean(error)}
      helperText={error}
      value={moment(value)}
      onChange={onChange}
      InputProps={{
        readOnly: readOnly,
      }}
   />
  </LocalizationProvider>
    // <TextField
      // label={label}
      // placeholder={placeholder}
      // fullWidth
      // required={required}
      // disabled={disabled}
      // error={Boolean(error)}
      // helperText={error}
      // value={value}
      // onChange={onChange}
      // InputProps={{
      //   readOnly: readOnly,
      // }}
    // />
  );
};

export default DateTime;
