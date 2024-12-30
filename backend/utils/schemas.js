const { z } = require("zod");

// Creating an object schema

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be more than 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

const signupSchema = loginSchema.extend({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
});

const productSchema = z.object({
  name: z.string({ required_error: "name is required" }).trim().min(5),
  description: z
    .string({ required_error: "description is required" })
    .trim()
    .min(5),
  price: z
    .number({ required_error: "price is required" })
    .min(0.01)
    .max(2000000),
  category: z
    .string({ required_error: "category is required" })
    .min(24)
    .max(24),
  images: z.array(
    z.object({
      url: z.string({ required_error: "image url is required" }).trim(),
    }),
  ),
  stock: z.number().min(0),
});

const paymentTypeSchema = z.enum(["CASH_ON_DELIVERY", "UPI", "CARD"]);

const shippingStatusSchema = z.enum(["NEW", "IN TRANSIT", "DELIVERED"]);

const orderSchema = z.object({
  user: z.string({ required_error: "user id is required" }).min(24).max(24),
  product: z.array(
    z.object({
      id: z
        .string({ required_error: "product id is required" })
        .min(24)
        .max(24),
      quantity: z.number().min(1),
    }),
  ),
  shippingStatus: shippingStatusSchema,
  paymentType: paymentTypeSchema,
});

module.exports = {
  signupSchema,
  loginSchema,
  productSchema,
  orderSchema,
};
