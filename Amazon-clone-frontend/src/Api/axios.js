import axios from "axios";
const axiosInstance = axios.create({
  
  baseURL: "https://amazon-api-deploy-d1rc.onrender.com/",
});
export {axiosInstance}