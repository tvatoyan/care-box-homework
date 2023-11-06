import axios from "./interceptor";

export const fetchWeather = async () => {
  return axios.get("/api/weather");
};
