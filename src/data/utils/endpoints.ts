export const endpoints = {
  login: () => `/auth/login`,
  authMe: () => `/auth/me`,
  signUp: () => `/auth/signup`,
  chat: () => `/chat`,
  deleteConversation: (id: number) => `/conversation/${id}`,
  getConversationDetail: (id: number) => `/conversation/${id}`,
  getConversation: () => `/conversation`,
  postConversation: () => `/conversation`,
};
