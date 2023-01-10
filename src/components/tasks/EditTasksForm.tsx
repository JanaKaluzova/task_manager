import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { taskSchema } from "../../utils/constants";
import { Task } from "../../utils/types";
import { ButtonBox, WrappingBox } from "../styles/sharedStyles";
import { FormInputSelectPriority } from "../formComponents/FormInputSelectPriority";
import { FormInputSelectType } from "../formComponents/FormInputSelectType";
import { FormInputText } from "../formComponents/FormInputText";

type Props = {
  initialValue: Task;
  onEditTask: (task: Task) => void;
  onCancel: () => void;
};

export const EditTasksForm: React.FC<Props> = ({
  initialValue,
  onEditTask,
  onCancel,
}) => {
  const methods = useForm<Task>({
    defaultValues: initialValue,
    resolver: yupResolver(taskSchema),
  });

  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<Task> = (data: Task) => {
    onEditTask({
      ...data,
    });
  };

  return (
    <>
      <WrappingBox>
        <FormInputText
          name="title"
          control={control}
          label="Title"
          defaultValue={initialValue.title}
        />
        <FormInputSelectType
          name="type"
          control={control}
          label="Type"
          defaultValue={initialValue.type}
        />
        <FormInputSelectPriority
          name="priority"
          control={control}
          label="Priority"
          defaultValue={initialValue.priority}
        />
        <FormInputText
          name="description"
          control={control}
          label="Description"
          defaultValue={initialValue.description}
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
