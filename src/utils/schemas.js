import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const loginSchema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .required()
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1),
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

const couponSchema = yup.object({
  coupon: yup.string().trim().min(3).max(50).required(),
});

const profileSchema = yup.object({
  firstName: yup.string().trim().min(3).max(50).required(),
  lastName: yup.string().trim().min(3).max(50).required(),
  email: yup.string().trim().email().required(),
  address: yup.string().trim().min(10).max(150),
  password: yup
    .string()
    .required()
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1),
  confirmPassword: yup
    .string()
    .required()
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1),
});

const billingSchema = yup.object({
  firstName: yup.string().trim().min(3).max(50).required(),
  companyName: yup.string().trim().min(3).max(50).required(),
  streetAddress: yup.string().trim().min(3).max(50).required(),
  appartment: yup.string().trim().min(3).max(50).required(),
  city: yup.string().trim().min(3).max(50).required(),
  email: yup.string().trim().email().required(),
  phone: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
});

export {
  loginSchema,
  signupSchema,
  contactSchema,
  couponSchema,
  profileSchema,
  billingSchema,
};
