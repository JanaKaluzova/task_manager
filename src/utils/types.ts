export type Task = {
  id: string;
  title: string;
  type: TypeEnum | string;
  priority: PriorityEnum | string;
  description: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export enum TypeEnum {
  TASK = "TASK",
  BUG = "BUG",
  STORY = "STORY",
}

export enum PriorityEnum {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export type FormAttribute =
  | "id"
  | "title"
  | "type"
  | "priority"
  | "description";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: string;
  defaultValue?: string;
}
