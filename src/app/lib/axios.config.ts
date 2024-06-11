import axios from "axios";
import { BASE_URL } from "@/data/utils/environments";
import { getCookie } from "../helpers/cookies";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + getCookie("authToken"),
    ActorTypeId: getCookie("authToken"),
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = `/`;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
