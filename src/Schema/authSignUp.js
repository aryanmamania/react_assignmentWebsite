import * as yup from "yup";
export const SignupSchema = yup.object().shape({
  // emailOrPhone: yup.string()
  // .trim()
  // .required('Email or phone number is required')
  // .test(
  //   'isEmailOrPhoneValid',
  //   'Invalid email or phone number',
  //   (value) =>
  //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
  //     /^[0-9]{10}$/.test(value)
  // ),
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

  cpassword: yup
    .string()
    .trim()
    .required("Confirm password can't be empty")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
