import axios from "axios";
import { get } from "lodash";
import { toast } from "react-toastify";

const request = axios.create({
  baseURL: "https://https://pokeapi.co/api/v2",

  params: {},
});

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

request.interceptors.request.use(
  (config: any) => {
    if (!config.headers.Authorization) {
      const token = store.getState().auth.token;
      if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    if (config.headers["Content-Type"]?.includes("multipart/form-data")) {
      return config;
    } else {
      config.data = {
        transactionTime: new Date(),
        data: config.data,
      };
    }
    return config;
  },
  (error) => {}
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = get(error, "response.status", "");
    const errorMsg = get(error, "response.data.resultMsg", "");

    switch (status) {
      case 409:
        toast.error(errorMsg);
        return;
      case 401:
        toast.warn(errorMsg);
        return;
      case 400:
        toast.error(errorMsg);
        return;
      case 500:
        toast.error("Server error!");
        return;
      default:
        return error;
    }
  }
);

export default request;
