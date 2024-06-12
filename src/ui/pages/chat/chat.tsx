import Button from "@/ui/shared/Button";
import Logo from "/images/logo.png";
import porfileImg from "/images/porfile-img.png";
import Image from "@/ui/shared/Image";
import PlusSVG from "@svg/plus.svg?react";
import Spinner from "@/ui/components/Spinner";
import TrashIcon from "@svg/trashIcon.svg?react";
import Input from "@/ui/shared/Input";
import {
  addChatApi,
  addConversationApi,
  deletedConversationApi,
  getConversationApi,
  getConversationByIdApi,
} from "@/app/api/conversationApi";
import { toastNotification } from "@/app/utils/toastNotification";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { clearCookies, getCookie } from "@/app/helpers/cookies";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const getCookieData = getCookie("authToken");
  const [conversation, setConversationId] = useState();
  const navigate = useNavigate();

  const addConversation = addConversationApi();
  const deletedConversation = deletedConversationApi();
  const addChat = addChatApi();

  const {
    data: conversations,
    isError,
    isLoading: conversationsLoading,
  } = getConversationApi();

  const {
    data: conversationById,
    error,
    isLoading: conversationByIdLoading,
  } = getConversationByIdApi(Number(conversation));

  const { register, handleSubmit, setValue } = useForm();

  const logout = () => {
    (getCookieData && clearCookies("authToken")) ?? navigate("/");
  };
  const addMessageHandler = (data: any) => {
    const sendData = {
      message: data.message ? data.message : "Sorry repeat again",
      conversation_id: conversation,
    };

    addChat.mutate(sendData, {
      onSuccess() {
        setValue("message", "");
        toastNotification("success", "add successfully");
      },
      onError(error: any) {
        toastNotification("error", error.response.data.message);
      },
    });
  };
  error && toastNotification("error", error.message);

  if (isError) {
    toastNotification("error", "Too Many Requests");
  }

  const createHandler = (data: any) => {
    addConversation.mutate(data, {
      onSuccess() {
        toastNotification("success", "created");
      },
      onError(error: any) {
        if (error.response.status === 400) {
          toastNotification("warning", error.response.data.Detail);
        }
        if (error.response.status === 500) {
          toastNotification("error", "Server Error");
        }
      },
    });
  };

  const deleteHandler = (id: number) => {
    deletedConversation.mutate(id, {
      onSuccess: () => {
        toastNotification("success", "Delete successfully");
      },
      onError: (error) => {
        toastNotification("error", error.message);
      },
    });
  };

  const setItem = (id: any) => {
    setConversationId(id);
  };
  return (
    <div>
      <header className="flex justify-between p-4 shadow-[0px_2px_5px_0px_#171A1F1F]">
        <Image
          className="object-contain w-[50px] h-[50px]"
          url={Logo}
          name="logo"
        />
        <Button
          onClick={logout}
          className="border bg-[#6D31ED]  text-white py-3 rounded-xl gap-3 w-5/2 "
        >
          Log out
        </Button>
      </header>
      <div className="flex justify-between p-4 gap-x-8">
        <div className="flex flex-col w-1/4">
          <Button
            onClick={handleSubmit(createHandler)}
            className="border bg-[#15ABFF] text-white py-3 rounded-xl gap-3 w-5/2 "
          >
            Conversations
            <PlusSVG />
          </Button>
          <div className="border rounded-md hadow-[0px_2px_5px_0px_#171A1F1F] h-[623px] bg-[#F8F9FA] mt-1 cursor-pointer">
            {conversationsLoading && <Spinner />}
            {addConversation.isPending && <Spinner />}
            {conversations?.map((item) => {
              return (
                item.label && (
                  <div
                    key={item.id}
                    onClick={() => setItem(item.id)}
                    className="flex justify-between bg-[#6D31ED] p-4 border rounded-lg mb-2"
                  >
                    <h4 className="text-white">Conversation</h4>
                    <TrashIcon onClick={() => deleteHandler(item.id)} />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="w-3/4">
          <div className="border rounded-md hadow-[0px_2px_5px_0px_#171A1F1F] h-[604px] bg-[#F8F9FA] mt-1 mb-4">
            <div className="p-2 flex items-center gap-x-2 border rounded-md bg-[#15ABFF]">
              <Image
                className="object-contain w-[50px] h-[50px]"
                url={porfileImg}
                name="porfileImg"
              />
              <span className="text-white">Chatbot</span>
            </div>
            {conversationByIdLoading && <Spinner />}
            {addChat.isPending ? (
              <Spinner />
            ) : (
              <div className="p-4 h-[90%] overflow-scroll ">
                {
                  //@ts-ignore
                  conversationById?.map((item: any) =>
                    item.user_id === null ? (
                      <div
                        key={item.id}
                        className="pt-16  flex gap-x-2 items-center"
                      >
                        {" "}
                        <Image
                          className="object-contain w-[50px] h-[50px]"
                          url={porfileImg}
                          name="porfileImg"
                        />
                        <span className="border rounded-3xl bg-[#F0F9FF]  p-4">
                          {item.content}
                        </span>
                      </div>
                    ) : (
                      <span className="float-right border rounded-3xl bg-[#F0F9FF]  p-4">
                        {addChat.isPending ? "..." : item.content}
                      </span>
                    )
                  )
                }
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit(addMessageHandler)} className="w-full">
            <Input
              name="message"
              label="Reply to Chatbot"
              trailing={<Button className="bg-blue-500">Send</Button>}
              register={register}
              className="w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
