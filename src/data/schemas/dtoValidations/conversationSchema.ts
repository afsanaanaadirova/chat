import { z } from "zod";

export const conversationSchema = z.array(
  z.object({
    id: z.number(),
    user_id: z.number(),
    label: z.string(),
    created_at: z.number(),
  })
);
