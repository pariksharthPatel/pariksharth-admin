import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import Iconify from "../../layout/iconify/Iconify";

const PasswordInput = ({
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth
      required={required}
      disabled={disabled}
      error={Boolean(error)}
      helperText={error}
      value={value}
      onChange={onChange}
      InputProps={{
        readOnly: readOnly,
        endAdornment:
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
             <Iconify icon={showPassword ?"ic:twotone-visibility-off":"ic:twotone-visibility"} /> 
          </IconButton>
        </InputAdornment>
      }}
      type={showPassword ? 'text' : 'password'}
     
      
    />
  );
};

export default PasswordInput;
