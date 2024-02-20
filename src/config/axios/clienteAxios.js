import { BASE_URL_API } from "@Const/enviroments";
import axios from "axios";

const clienteAxios = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  }
});
// clienteAxios.interceptors.request.use((config) => {
//   const accessToken = getAccessToken();
//   config.headers.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

export default clienteAxios;
