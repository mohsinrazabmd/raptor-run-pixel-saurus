import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import {
  AppWrapper,
  CardWrapper,
  DataDiv,
  MainDataWrapper,
  MainSection,
  MainWrapper,
} from "./competitions-element";
import { badgeImg } from "assets";
import RaptorRunGame from "games/raptor-run";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import {
  fetchLeaderboard,
  initializeChallengeLeaderboard,
} from "store/redux/slices/leaderBoard/leaderBoardSlice";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import useCustomTimer from "hooks/customTimerHook";
import { CommonUtility } from "utility/common";
import { HeaderDiv } from "components/navbar/elements";
import { useLocation } from "react-router-dom";

const LiveChallenge = ({
  startTimeOfNextChallenge,
  challenge,
  gameId,
  getChallenge,
}) => {
  const { user, token } = useAppSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const { address } = useWeb3ModalAccount();
  const location = useLocation();

  const {
    loading: leaderboardLoading,
    scores,
    hasMore,
    page,
  } = useAppSelector((state) => state.leaderboard);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (challenge) dispatch(initializeChallengeLeaderboard(challenge?._id));
  }, [challenge, user]);

  const { isRunning, days, hours, minutes, seconds } = useCustomTimer({
    startTime: challenge?.startTime
      ? challenge.startTime
      : startTimeOfNextChallenge
      ? new Date()
      : new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    endTime: challenge?.endTime
      ? challenge.endTime
      : startTimeOfNextChallenge
      ? startTimeOfNextChallenge
      : new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    onEnd: getChallenge,
  });

  const getTimerText = () => {
    if (startTimeOfNextChallenge && !challenge) {
      return "Challenge starts in: ";
    } else if (isRunning && challenge) {
      return "Challenge ends in: ";
    }

    return "";
  };
  const hiddenTable = location.pathname === "/";

  return (
    <AppWrapper>
      <HeaderDiv>
        <Container className="top-div">
          {startTimeOfNextChallenge || challenge ? (
            <div className="timer-div">
              <div className="d-flex justify-content-center align-items-center gap-2">
                {getTimerText()}
                <div>
                  {days > 0 ? (
                    <span>{`${days}d : ${hours}h`}</span>
                  ) : (
                    <span>
                      {" "}
                      {`${hours.toString().padStart(2, "0")} : ${minutes
                        .toString()
                        .padStart(2, "0")} : ${seconds
                        .toString()
                        .padStart(2, "0")}`}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>New challenge coming soon</div>
          )}
        </Container>
      </HeaderDiv>
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
            {hiddenTable
              ? ""
              : address &&
                challenge?.rewards.length > 0 && (
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
                                      {CommonUtility.addressConvertor(
                                        score._id,
                                        18
                                      )}
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
