import { useEffect, useState } from "react";

import { ChallengesService } from "services/challengesService";
import LiveChallenge from "./live-challenge";
import { CommonUtility } from "utility/common";
import OverlayLoader from "components/loaders/overlayLoader";

const ChallengeGamePage = ({
  walletAddress,
  startTimeOfNextChallenge,
  challenge,
  gameId,
  loading,
  getChallenge,
}) => {
  return loading && !challenge && !startTimeOfNextChallenge ? (
    <OverlayLoader />
  ) : (
    <LiveChallenge
      startTimeOfNextChallenge={startTimeOfNextChallenge}
      challenge={challenge}
      gameId={1}
      getChallenge={getChallenge}
    />
  );
};

export default ChallengeGamePage;
