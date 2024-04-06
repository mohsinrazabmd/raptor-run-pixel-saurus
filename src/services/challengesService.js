import { APIPath } from "utility/constant";
import { BaseService } from "./baseService";

class Challenges {
  liveChallenge = (gameId) => {
    return BaseService.get(`${APIPath.liveChallenge}/${gameId}`);
  };

  getLeaderBoard = (id, page) => {
    return BaseService.get(`${APIPath.challengeLeaderboard}/${id}/${page}`);
  };
}

const ChallengesService = new Challenges();
Object.freeze(ChallengesService);
export { ChallengesService };
