import axiosInstance from "@/app/lib/axios.config";
import { LoginDSO } from "@/data/dso/login.dso";
import { endpoints } from "@/data/utils/endpoints";
import { RegisterDSO } from "@/data/dso/register.dso";

export const loginService = async (appeal: LoginDSO) => {
  const res = await axiosInstance.post(endpoints.login(), appeal);
  return res.data;
};

export const registerService = async (appeal: RegisterDSO) => {
  const res = await axiosInstance.post(endpoints.signUp(), appeal);
  return res.data;
};
