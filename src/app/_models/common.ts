import { z } from "zod";

export const baseResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().nullish(),
  validation_errors: z
    .object({
      field: z.string(),
      type: z.string(),
      tag: z.string(),
      value: z.string(),
    })
    .array()
    .nullish(),
});
