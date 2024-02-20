import clienteAxios from "./clienteAxios";
import axios from "axios";

export const clientAxiosGET = async ({
  url,
  params,
  headers = {},
  responseType = "json",
}) => {
  const response = await clienteAxios.get(url, {
    params,
    headers,
    responseType,
  });
  return response.data;
};

export const clientAxiosPOST = async ({ url, data, params, headers = {} }) => {
  const response = await clienteAxios.post(url, data, { params, headers });
  return response.data;
};

export const clientAxiosPATCH = async ({ url, data, params, headers = {} }) => {
  const response = await clienteAxios.patch(url, data, { params, headers });
  return response.data;
};

export const clientAxiosPUT = async ({ url, data, params, headers = {} }) => {
  const response = await clienteAxios.put(url, data, { params, headers });
  return response.data;
};

export const clientAxiosDELETE = async ({ url }) => {
  const response = await clienteAxios.delete(url);
  return response.data;
};

export const axiosGet = async ({ url, params, headers, responseType }) => {
  const response = await axios.get(url, {
    params,
    headers,
    responseType,
  });
  return response.data;
};
