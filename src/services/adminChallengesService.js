import { APIPath } from "utility/constant";
import { BaseService } from "./baseService";

class AdminChallenges {
  createChallenge = (data) => {
    return BaseService.post(APIPath.createChallenge, data);
  };
  live = (id) => {
    return BaseService.get(`${APIPath.liveChallenge}/${id}`);
  };

  challengeWinners = (id) => {
    return BaseService.get(`${APIPath.challengeWinners}/${id}`);
  };

  upcomingChallenges = (gameId) => {
    return BaseService.get(`${APIPath.upcomingChallenges}/${gameId}`);
  };
  allChallenges = (page) => {
    return BaseService.get(`${APIPath.allChallenges}/${page}`);
  };
}

const AdminChallengesService = new AdminChallenges();
Object.freeze(AdminChallengesService);
export { AdminChallengesService };
