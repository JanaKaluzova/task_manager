import { Button, Divider } from "@mui/material";
import React from "react";
import { User } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { userInitialValues, userSchema } from "../../utils/constants";
import { FormInputText } from "../formComponents/FormInputText";
import { ButtonBox, WrappingBox } from "../styles/sharedStyles";

type CreateUserProps = {
  onCreateUser: (user: User) => void;
  onCancel: () => void;
};

export const CreateUserForm: React.FC<CreateUserProps> = ({
  onCreateUser,
  onCancel,
}) => {
  const methods = useForm<User>({
    defaultValues: userInitialValues,
    resolver: yupResolver(userSchema),
  });
  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<User> = (data: User) => {
    onCreateUser({
      ...data,
      id: new Date().getTime().toString(),
    });
  };

  return (
    <>
      <WrappingBox>
        <FormInputText name="firstName" control={control} label="First Name" />
        <FormInputText name="lastName" control={control} label="Last Name" />
        <FormInputText name="email" control={control} label="Email" />
        <FormInputText
          name="phoneNumber"
          control={control}
          label="Phone Number"
        />
      </WrappingBox>
      <Divider />

      <ButtonBox>
        <Button variant="text" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Create
        </Button>
      </ButtonBox>
    </>
  );
};
