import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendservicetask-management.onrender.com/api",
  withCredentials: true,
});
export default instance;
