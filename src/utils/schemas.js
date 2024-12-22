import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().required(),
});

const signupSchema = loginSchema.concat(
  yup.object({
    name: yup.string().trim().min(3).max(50).required(),
  }),
);

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactSchema = yup.object({
  email: yup.string().trim().email().required(),
  name: yup.string().trim().min(3).max(50).required(),
  phone: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  message: yup.string().trim().required(),
});

export { loginSchema, signupSchema, contactSchema };
