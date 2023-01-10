import { Button, Divider } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { taskInitialValues, taskSchema } from "../../utils/constants";
import { Task } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "../formComponents/FormInputText";
import { FormInputSelectType } from "../formComponents/FormInputSelectType";
import { FormInputSelectPriority } from "../formComponents/FormInputSelectPriority";
import { ButtonBox, WrappingBox } from "../styles/sharedStyles";

export type CreateTaskProps = {
  onCreateTask: (task: Task) => void;
  onCancel: () => void;
};

export const CreateTaskForm: React.FC<CreateTaskProps> = ({
  onCreateTask,
  onCancel,
}) => {
  const methods = useForm<Task>({
    defaultValues: taskInitialValues,
    resolver: yupResolver(taskSchema),
  });

  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<Task> = (data: Task) => {
    onCreateTask({
      ...data,
      id: new Date().getTime().toString(),
    });
  };

  return (
    <>
      <WrappingBox>
        <FormInputText name="title" control={control} label="Title" />
        <FormInputSelectType name="type" control={control} label="Type" />
        <FormInputSelectPriority
          name="priority"
          control={control}
          label="Priority"
        />
        <FormInputText
          name="description"
          control={control}
          label="Description"
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
