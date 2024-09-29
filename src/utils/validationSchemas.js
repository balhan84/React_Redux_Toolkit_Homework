import * as yup from "yup";

export const TASKS_VALIDATION_SCHEMA = yup.object({
  taskName: yup.string().min(5).max(65).required(),
});
