import axios, { InternalAxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
});

http.interceptors.request.use(
  (axiosConfig: InternalAxiosRequestConfig) => {
    if (axiosConfig.headers) {
      if (!axiosConfig?.headers["Content-Type"]) {
        axiosConfig.headers["Content-Type"] = "application/json";
      }
    }

    return axiosConfig;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default http;
