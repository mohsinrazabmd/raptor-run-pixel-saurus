import { useEffect, useState } from "react";
import { CommonHook } from "./commonHook";
import { useParams } from "react-router-dom";
import { AdminChallengesService } from "../services/adminChallengesService";
import { CommonUtility } from "../utility/common";

const gameId = 1;

export const GetLiveChallengesHookAdmin = () => {
  const {
    data: upcomingChallenges,
    setData: setUpcomingChallenges,
    setError,
    loading,
    setLoading,
    error,
  } = CommonHook([]);
  const [liveChallenge, setLiveChallenge] = useState();

  const getLiveChallenge = async (id) => {
    try {
      setLoading(true);
      console.log("Get live challenge hook");
      const result = await AdminChallengesService.live(gameId);
      if (result.data) {
        const challenge = CommonUtility.parseJsonWithDates(result.data);
        setLiveChallenge(challenge);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpcomingChallenges = async () => {
    try {
      setLoading(true);
      const result = await AdminChallengesService.upcomingChallenges(gameId);
      if (result.data) {
        const challenges = CommonUtility.parseJsonWithDates(result.data);

        setUpcomingChallenges(challenges);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const insertChallenge = async (challenge) => {
    setUpcomingChallenges((c) => {
      if (c && c.length > 0) return [challenge, ...c];
      else return [challenge];
    });
    getLiveChallenge();
  };

  useEffect(() => {
    if (gameId) {
      fetchUpcomingChallenges();
      getLiveChallenge();
    }
  }, [gameId]);

  return {
    upcomingChallenges,
    loading,
    setLoading,
    error,
    liveChallenge,
    insertChallenge,
    getLiveChallenge,
  };
};
