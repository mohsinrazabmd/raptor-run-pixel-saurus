import axios from "axios";
import { APIPath } from "utility/constant";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: APIPath.server,
});

export default axiosInstance;
