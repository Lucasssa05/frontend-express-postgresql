import axios from "axios";
import API_URL from "../url/API_URL";
import { useMutation } from "@tanstack/react-query";
import type { Login } from "../interface/Login";

interface LoginResponse {
  token: string;
}

const postLogin = async (login: Login): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(API_URL + "/login", login);
  return response.data;
};

export function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    retry: 2,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Login efetuado!");
    },
    onError: (error) => {
      console.error("Erro ao fazer login", error);
    },
  });
}
