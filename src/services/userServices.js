import { APIPath } from "utility/constant";
import { BaseService } from "./baseService";

class User {
  createUser = (data) => {
    return BaseService.post(APIPath.createUser, data);
  };
  addUserReward = (data) => {
    return BaseService.post(APIPath.addUserReward, data);
  };
  addUserProfile = (data) => {
    return BaseService.post(APIPath.addUserProfile, data);
  };

  signUp = (walletAddress) => {
    return BaseService.post(APIPath.signUp, { walletAddress });
  };

  getUserProfile = (walletAddress) => {
    return BaseService.get(`${APIPath.getUserProfile}/${walletAddress}`);
  };
  getProbabilityRatio = () => {
    return BaseService.get(APIPath.getProbabilityRatio);
  };
}

const UserService = new User();
Object.freeze(UserService);
export { UserService };
