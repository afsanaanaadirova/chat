import axiosInstance from "@/app/lib/axios.config";
import { endpoints } from "@/data/utils/endpoints";
import { ConversationDTO } from "@/data/dto/conversation.dto";

export const getConversationService = async () => {
  const res = await axiosInstance.get<ConversationDTO>(endpoints.getConversation());
  // return conversationMigration.dtoToModel(res.data);
  return res.data;
};
export const getConversationByIdService = async (id: number) => {
  const res = await axiosInstance.get<any>(endpoints.getConversationDetail(id));
  // return appealByIdMigration.dtoToModel(res.data);
  return res.data;
};

export const deleteConversationService = async (id: number) => {
  const res = await axiosInstance.delete(endpoints.deleteConversation(id));
  return res.data;
};

export const adddConversationService = async (appeal: any) => {
  const res = await axiosInstance.post(endpoints.postConversation(), appeal);
  return res.data;
};
export const addChatService = async (appeal: any) => {
  const res = await axiosInstance.post(endpoints.chat(), appeal);
  return res.data;
};

