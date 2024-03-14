import { baseResponseSchema } from '@/app/_models/common';
import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export const loginResponseSchema = baseResponseSchema.extend({
  data: z
    .object({
      access_token: z.string(),
      refresh_token: z.string(),
    })
    .optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
