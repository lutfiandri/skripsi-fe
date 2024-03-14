import { z } from "zod";
import { baseResponseSchema } from "@/app/_models/common";

export const authorizeResponseSchema = baseResponseSchema.extend({
  data: z
    .object({
      redirect_uri: z.string(),
    })
    .optional(),
});

export type AuthorizeResponse = z.infer<typeof authorizeResponseSchema>;
