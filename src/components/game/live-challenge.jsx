import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import {
  AppWrapper,
  CardWrapper,
  DataDiv,
  HeaderDiv,
  MainDataWrapper,
  MainSection,
  MainWrapper,
  Title,
} from "./competitions-element";
import { badgeImg } from "assets";
import RaptorRunGame from "games/raptor-run";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import {
  fetchLeaderboard,
  initializeChallengeLeaderboard,
} from "store/redux/slices/leaderBoard/leaderBoardSlice";
import environment from "../../environment.js";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import useCustomTimer from "hooks/customTimerHook";
import { CommonUtility } from "utility/common";

const LiveChallenge = ({
  startTimeOfNextChallenge,
  challenge,
  gameId,
  getChallenge,
}) => {
  const { user, token } = useAppSelector((state) => state.user);
  const { socketIO } = useAppSelector((state) => state.socketIo);

  const { address } = useWeb3ModalAccount();

  const {
    loading: leaderboardLoading,
    scores,
    hasMore,
    page,
  } = useAppSelector((state) => state.leaderboard);

  const dispatch = useAppDispatch();

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
    if (challenge) dispatch(initializeChallengeLeaderboard(challenge?._id));
  }, [challenge, user]);

  return (
    <AppWrapper>
      <MainSection>
        <Container>
          <MainWrapper>
            <Row>
              <Col lg={10}>
                <RaptorRunGame
                  // walletAddress={address}
                  screenWidth={window.innerWidth}
                  // grandToken={token}
                  gameId={gameId}
                  challengeId={challenge?._id}
                  walletAddress={address}
                  // challenge={challenge?._id}
                />
              </Col>
            </Row>
            {challenge?.rewards.length > 0 && (
              <Row>
                <Col lg={10}>
                  <CardWrapper>
                    <MainDataWrapper>
                      <DataDiv>
                        <div className="header-image-div">
                          <Image src={badgeImg} alt="header bg" />
                          <h1>Challenge Rewards</h1>
                        </div>

                        <div className="content-div">
                          {challenge.rewards.map((reward, index) => (
                            <React.Fragment key={reward}>
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
                          <h1>Leaderboard </h1>
                        </div>

                        <div className="content-div">
                          {scores.map((score, index) => (
                            <React.Fragment>
                              <div className="inner-content-div">
                                <div className="index-tag">
                                  <p>{index + 1}</p>
                                </div>

                                <h4
                                  style={{
                                    paddingLeft: "60px",
                                  }}
                                >
                                  {CommonUtility.truncateString(score._id, 18)}
                                </h4>

                                <h4>{score.maxScore}</h4>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </DataDiv>
                    </MainDataWrapper>
                  </CardWrapper>
                </Col>
              </Row>
            )}
          </MainWrapper>
        </Container>
      </MainSection>
    </AppWrapper>
  );
};

export default LiveChallenge;
