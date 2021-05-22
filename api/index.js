import axios from "axios";
const BASE_URL = "http://localhost/codehero/api/";
// const BASE_URL = "https://sohoceravietnam.com/api";
// axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
api.defaults.headers.Accept = "application/json";
api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default api;
