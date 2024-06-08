import { z } from "zod";
import { baseResponseSchema } from "@/app/_models/common";

export const oauthScopeResponseSchema = baseResponseSchema.extend({
  data: z
    .object({
      id: z.string(),
      description: z.string(),
      permission_ids: z.array(z.string()),
      created_at: z.date(),
      updated_at: z.date(),
    })
    .optional(),
});

export type OAuthScopeResponse = z.infer<typeof oauthScopeResponseSchema>;
