import { z } from "zod";
import { conversationSchema } from "@/data/schemas/dtoValidations/conversationSchema";

export type ConversationDTO = z.infer<typeof conversationSchema>;
