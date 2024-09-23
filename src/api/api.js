import axiosInstance from "@/hooks/axios";

export const login = async (body) => {
  const resp = await axiosInstance.post("Account/Login", body);
  return resp;
};
