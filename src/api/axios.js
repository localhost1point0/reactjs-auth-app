import axios from "axios";
// const BASE_URL = "https://nodejs-auth-api-production.up.railway.app/api";
const BASE_URL = "https://nodejs-auth-api.onrender.com/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
