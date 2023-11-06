import axios from "axios";
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "https://backendservicetask-management.onrender.com/api",
  withCredentials: true,
});
export default instance;
