import { IconButton, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import Iconify from "../../layout/iconify/Iconify";
const TextInput = ({
  control,
  name,
  label,
  required,
  disabled,
  readOnly,
  placeholder,
  error,
  rules = {},
  clearable,
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
      }}
      {...(value &&
        clearable && {
          // display the button and remove select indicator
          // when user has selected a value
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                // don't open the popup when clicking on this button
                event.stopPropagation();
              }}
              onClick={() => {}}
            >
              <Iconify name="mdi:close-outline" size={20} />
            </IconButton>
          ),
          indicator: null,
        })}
    />
  );
};

export default TextInput;
