import * as yup from "yup";
export const AdminLoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Enter you email")
    .test("isvalidEmail", "Enter a valid Email", (arg) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg)
    ),
  password: yup
    .string()
    .trim()
    .required("Required")
    .min(8, "Invalid Password")
    .max(16, "Invalid Password"),
});
