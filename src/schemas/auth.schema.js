import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      message: "Username is required",
    })
    .nullable({
      message: "Username can not be empty",
    }),
  email: z
    .string({
      message: "Email is required",
    })
    .email({ message: "Email is not valid" }),
  password: z
    .string({
      message: "password is required",
    })
    .min(6, {
      message: "password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      message: "email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      message: "password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
