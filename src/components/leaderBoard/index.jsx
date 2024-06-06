import React, { useEffect, useState } from "react";
import {
  CardWrapper,
  DataDiv,
  LeaderboardWrapper,
  MainDataWrapper,
} from "./element";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Navbar from "components/navbar";
import { Col, Image, Row } from "react-bootstrap";
import { badgeImg } from "assets";
import { useAppDispatch, useAppSelector } from "store/store";
import { CommonUtility } from "utility/common";
import { AdminChallengesService } from "services/adminChallengesService";
import {
  fetchLeaderboard,
  initializeChallengeLeaderboard,
} from "store/redux/slices/leaderBoard/leaderBoardSlice";

const LeaderBoard = () => {
  const { address } = useWeb3ModalAccount();
  const dispatch = useAppDispatch();
  const [challenge, setChallenge] = useState();
  const [loading, setLoading] = useState(false);

  const { socketIO } = useAppSelector((state) => state.socketIo);
  const {
    loading: leaderboardLoading,
    scores,
    hasMore,
    page,
    setChallengeId,
  } = useAppSelector((state) => state.leaderboard);

  const getChallenge = async () => {
    try {
      setLoading(true);
      const result = await AdminChallengesService.live(1);
      if (result.data) {
        const challenge = CommonUtility.parseJsonWithDates(result.data);
        if (challenge) dispatch(initializeChallengeLeaderboard(challenge?._id));
        setChallenge(challenge);
      } else {
        setChallenge(undefined);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!socketIO) return;

    socketIO.on("challenge-score-created", handleNewScoreCreation);

    return () => {
      socketIO?.off("challenge-score-created", handleNewScoreCreation);
    };
  }, [socketIO]);

  const handleNewScoreCreation = async (challengeIdParam) => {
    if (challengeIdParam !== challenge?._id) return;

    dispatch(fetchLeaderboard(0));
  };

  useEffect(() => {
    getChallenge();
  }, []);

  return (
    <LeaderboardWrapper>
      <Navbar />

      <h1>Leaderboard</h1>

      <div className="leaderboard-table-wrapper ">
        {address && (
          <CardWrapper>
            <MainDataWrapper>
              <DataDiv>
                <div className="header-image-div">
                  <Image src={badgeImg} alt="header bg" />
                  <h1>Challenge Rewards</h1>
                </div>

                <div className="content-div">
                  {challenge?.rewards?.map((reward, index) => (
                    <React.Fragment key={index}>
                      <div className="inner-content-div">
                        <div className="index-tag">
                          <p>{index + 1}</p>
                        </div>

                        {/* Even though this div is empty, Do  not remove it */}
                        <div />
                        <h4>
                          {reward} <span>RAWR</span>
                        </h4>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </DataDiv>

              <DataDiv>
                <div className="header-image-div">
                  <Image src={badgeImg} alt="header bg" />
                  <h1>Leaderboard</h1>
                </div>

                <div className="content-div">
                  {scores.map((score, index) => (
                    <React.Fragment key={index}>
                      <div className="inner-content-div">
                        <div className="index-tag">
                          <p>{index + 1}</p>
                        </div>

                        <h4
                          style={{
                            paddingLeft: "60px",
                          }}
                        >
                          {CommonUtility.addressConvertor(score._id, 18)}
                          {/* {score._id} */}
                        </h4>

                        <h4>{score.maxScore}</h4>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </DataDiv>
            </MainDataWrapper>
          </CardWrapper>
        )}
      </div>
    </LeaderboardWrapper>
  );
};

export default LeaderBoard;
