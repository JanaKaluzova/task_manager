import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps, TypeEnum } from "../../utils/types";
import { SelectErrorMessage, StyledFormControl } from "../styles/sharedStyles";

export const FormInputSelectType: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <StyledFormControl>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select
              onChange={onChange}
              value={value}
              variant="standard"
              error={!!error?.message}
            >
              <MenuItem value={TypeEnum.BUG}>BUG</MenuItem>
              <MenuItem value={TypeEnum.STORY}>STORY</MenuItem>
              <MenuItem value={TypeEnum.TASK}>TASK</MenuItem>
            </Select>
            {!!error && (
              <SelectErrorMessage>{error.message}</SelectErrorMessage>
            )}
          </>
        )}
        control={control}
        name={name}
        rules={{ required: true }}
      />
    </StyledFormControl>
  );
};
