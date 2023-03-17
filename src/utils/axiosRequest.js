import axios from "axios";

const AxiosRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { AxiosRequest };
