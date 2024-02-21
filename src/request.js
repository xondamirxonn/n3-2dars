import axios from "axios";
import { loadState } from "./library/storage";
const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use(
  (config) => {
    const token = loadState("token");

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export { request };
