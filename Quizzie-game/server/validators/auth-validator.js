const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must no be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(2, { message: "Email must be at least of 2 characters" })
    .max(255, { message: "Email must no be more than 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(255, { message: "Password must no be more than 255 characters" }),

  confirmPassword: z
    .string({ required_error: "Confirm-Password is required" })
    .trim()
    .min(7, { message: "Confirm-Password must be at least of 6 characters" })
    .max(255, {
      message: "Confirm-Password must no be more than 255 characters",
    }),
});

module.exports = signupSchema;
