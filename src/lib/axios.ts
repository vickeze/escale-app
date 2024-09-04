import Axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;
console.log(API_URL);
export const axios = Axios.create({
  baseURL: API_URL + "/api",
});
