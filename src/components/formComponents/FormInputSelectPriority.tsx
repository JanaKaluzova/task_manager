import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps, PriorityEnum } from "../../utils/types";
import { SelectErrorMessage, StyledFormControl } from "../styles/sharedStyles";

export const FormInputSelectPriority: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <StyledFormControl>
      <InputLabel id="priority-label">{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select
              labelId="priority-label"
              onChange={onChange}
              value={value}
              variant="standard"
              error={!!error?.message}
            >
              <MenuItem value={PriorityEnum.LOW}>LOW</MenuItem>
              <MenuItem value={PriorityEnum.MEDIUM}>MEDIUM</MenuItem>
              <MenuItem value={PriorityEnum.HIGH}>HIGH</MenuItem>
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
