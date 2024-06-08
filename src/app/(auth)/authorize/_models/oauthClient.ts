import { z } from "zod";
import { baseResponseSchema } from "@/app/_models/common";

export const oauthClientResponseSchema = baseResponseSchema.extend({
  data: z
    .object({
      id: z.string(),
      name: z.string(),
      scope_ids: z.array(z.string()),
    })
    .optional(),
});

export type OAuthClientResponse = z.infer<typeof oauthClientResponseSchema>;
