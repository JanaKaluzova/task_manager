import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userSchema } from "../../utils/constants";
import { User } from "../../utils/types";
import { FormInputText } from "../formComponents/FormInputText";
import { ButtonBox, WrappingBox } from "../styles/sharedStyles";

type Props = {
  initialValue: User;
  onEditUser: (user: User) => void;
  onCancel: () => void;
};

export const EditUserForm: React.FC<Props> = ({
  initialValue,
  onEditUser,
  onCancel,
}) => {
  const methods = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(userSchema),
  });

  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<User> = (data: User) => {
    onEditUser({
      ...data,
    });
  };

  return (
    <>
      <WrappingBox>
        <FormInputText
          name="firstName"
          control={control}
          label="First Name"
          defaultValue={initialValue.firstName}
        />
        <FormInputText
          name="lastName"
          control={control}
          label="Last Name"
          defaultValue={initialValue.lastName}
        />
        <FormInputText
          name="email"
          control={control}
          label="Email"
          defaultValue={initialValue.email}
        />
        <FormInputText
          name="phoneNumber"
          control={control}
          label="Phone Number"
          defaultValue={initialValue.phoneNumber}
        />
      </WrappingBox>

      <Divider variant="fullWidth" />
      <ButtonBox>
        <Button variant="text" onClick={onCancel}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Edit
        </Button>
      </ButtonBox>
    </>
  );
};
