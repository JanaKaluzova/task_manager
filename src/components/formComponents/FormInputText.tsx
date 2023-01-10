import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../utils/types";
import { StyledTextField } from "../styles/sharedStyles";

export const FormInputText: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <StyledTextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="standard"
        />
      )}
    />
  );
};
