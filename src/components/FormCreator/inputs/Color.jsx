import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { MuiColorInput } from 'mui-color-input'
const ColorInput = ({
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
  // return   <MuiColorInput value={value} onChange={handleChange} />
  return (
    <MuiColorInput
    
      label={label}
      placeholder={placeholder}
      fullWidth
      required={required}
      disabled={disabled}
      error={Boolean(error)}
      helperText={error}
      value={value}
      onChange={onChange}
      format="hex"
      InputProps={{
        readOnly: readOnly,
      }}
    />
  );
};

export default ColorInput;
