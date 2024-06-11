import { type ConversationDTO } from "@/data/dto/conversation.dto";
import { ConversationModel } from "@/data/model/conversation.model";

export const conversationMigration = {
  //TODO I will be fix ts
  dtoToModel: (dto: ConversationDTO): ConversationModel => {
    return {
      //@ts-ignore
      id: dto.id,
      //@ts-ignore
      user_id: dto.user_id,
      //@ts-ignore
      label: dto.label,
      //@ts-ignore
      created_at: dto.created_at,
    };
  },
  modelToDSO: () => {
    //
  },
};
