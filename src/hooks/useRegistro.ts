import axios, { type AxiosPromise } from "axios";
import type { Registro } from "../interface/Registro";
import API_URL from "../url/API_URL";
import { useMutation } from "@tanstack/react-query";

const postRegistro = async (data: Registro): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/register", data);
  return response;
};

export function useRegistro() {
  const mutate = useMutation({
    mutationFn: postRegistro,
    retry: 2,
  });
  return mutate;
}
