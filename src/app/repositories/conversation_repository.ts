import {
  addChatService,
  adddConversationService,
  deleteConversationService,
  getConversationByIdService,
  getConversationService,
} from "@/app/services/conversation.service";
import { ConversationModel } from "@/data/model/conversation.model";

const ConversationRespository = {
  getConversation(): Promise<ConversationModel> {
    return getConversationService();
  },
  getConversationById(id: number): Promise<unknown> {
    return getConversationByIdService(id);
  },
  deleteConversation(id: number): Promise<unknown> {
    return deleteConversationService(id);
  },
  addConversation(appeal: any): Promise<{ appealId: number }> {
    return adddConversationService(appeal);
  },
  addChat(appeal: any): Promise<{ appealId: number }> {
    return addChatService(appeal);
  },
};

export default ConversationRespository;
