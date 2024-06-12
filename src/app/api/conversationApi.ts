import conversation_repository from "@/app/repositories/conversation_repository";
import { ERevalidateTags } from "@/data/enum/revalidate_tags.enum";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const getConversationApi = () => {
  return useQuery({
    queryKey: [ERevalidateTags.chat],
    queryFn: () => {
      return conversation_repository.getConversation();
    },
    refetchOnWindowFocus: false,
  });
};

export const getConversationByIdApi = (id: number) => {
  return useQuery({
    queryKey: [ERevalidateTags.chatt, id],
    queryFn: () => {
      return conversation_repository.getConversationById(id);
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export const deletedConversationApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return conversation_repository.deleteConversation(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERevalidateTags.chat] });
    },
  });
};

export const addConversationApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (appeal: any) => {
      return conversation_repository.addConversation(appeal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERevalidateTags.chat] });
    },
  });
};
export const addChatApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (appeal: any) => {
      return conversation_repository.addChat(appeal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERevalidateTags.chatt] });
    },
  });
};
