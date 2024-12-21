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

export { loginSchema, signupSchema };
