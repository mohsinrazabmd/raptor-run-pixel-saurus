import io from "socket.io-client";
import env from "../environment.js";

export class PackagesUtility {
  static socketIO = () => {
    const ENDPOINT = env.BACKEND_BASE_URL;
    const socket = io(ENDPOINT);
    return socket;
  };
}
