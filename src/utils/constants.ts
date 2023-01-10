import { Task, TypeEnum, User } from "./types";
import * as yup from "yup";

export const taskData = "formData";
export const userData = "userData";

export const PhoneRegex = /^(\d{7})?(\d{8})?(\d{9})?$/;

export const activeStyle = {
  textDecoration: "none",
  color: "black",
};
export const navStyle = {
  textDecoration: "none",
  color: "black",
};

export const taskInitialValues: Task = {
  id: "",
  title: "",
  type: "",
  priority: "",
  description: "",
};

export const userInitialValues: User = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const taskSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  type: yup.string().required("Please select a type"),
  priority: yup.string().required("Please select a priority"),
  description: yup.string().required("This field is required"),
});

export const drawerWidth = 240;

export const userSchema = yup.object().shape({
  firstName: yup.string().max(30).required("This field is required"),
  lastName: yup.string().max(40).required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phoneNumber: yup
    .string()
    .matches(PhoneRegex, {
      message: "This field must have 7 to 9 numbers",
    })
    .required("This field is required"),
});
