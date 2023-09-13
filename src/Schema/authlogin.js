import * as yup from 'yup';
export const loginSchema = yup.object().shape({
    emailOrPhone: yup.string()
    .trim()
    .required('Email or phone number is required')
    .test(
      'isEmailOrPhoneValid',
      'Invalid email or phone number',
      (value) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
        /^[0-9]{10}$/.test(value)
    ),
    
    password: yup
    .string()
    .trim()
    .required("Required")
    .min(8, "Invalid Password")
    .max(16, "Invalid Password"),
  });
  export const phoneSchema = yup.object().shape({
    phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  })
//   export const loginSchema = yup.object().shape({
//     email: yup
//       .string()
//       .trim()
//       .required("Enter you email")
//       .test('isvalidEmail', "Enter a valid Email", (arg) => 
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg)),
//     password: yup
//       .string()
//       .trim()
//       .required("Password can not be empty")
//   });