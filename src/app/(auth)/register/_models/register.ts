import { baseResponseSchema } from "@/app/_models/common";
import { z } from "zod";

export const formSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Confirm password don't match",
    path: ["confirm_password"],
  });

export const registerResponseSchema = baseResponseSchema.extend({
  data: z
    .object({
      access_token: z.string(),
      refresh_token: z.string(),
    })
    .optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
