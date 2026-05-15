import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(3).max(30),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 chars").max(30),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string(),
});

export const postSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 chars")
    .max(50, "Title must be at most 50 chars"),
  description: z
    .string()
    .min(10, "Description must be at least 10 chars")
    .max(300, "Description must be at most 300 chars"),
  image: z.string().min(1, "Image URL is required").url("Invalid image URL"),
});
