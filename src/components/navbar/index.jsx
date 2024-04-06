import { useEffect, useState } from "react";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalAccount,
  // useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import environment from "environment.js";
import { Col, Container, Image, Row } from "react-bootstrap";
import Game from "components/game";
import { ContainerDiv, HeaderDiv, MainSection } from "./elements";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "../../assets/images/navLogo.png";
import connectbtn from "../../assets/images/connectbtn.png";
import { AdminChallengesService } from "../../services/adminChallengesService.js";
import { CommonUtility } from "utility/common";
import useCustomTimer from "hooks/customTimerHook";
import ChallengeGamePage from "components/game/challenge";

//web3 config

const projectId = environment.WALLET_ID;

const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
];
const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: "light",
  themeVariables: {
    "--w3m-color-mix": "#00DCFF",
    "--w3m-color-mix-strength": 20,
  },
});

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const { address } = useWeb3ModalAccount();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const modal = useWeb3Modal();

  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState(undefined);
  const [startTimeOfNextChallenge, setStartTimeOfNextChallenge] =
    useState(undefined);

  const getChallenge = async () => {
    setLoading(true);
    try {
      const result = await AdminChallengesService.live(1);
      if (result.data) {
        const challenge = CommonUtility.parseJsonWithDates(result.data);

        setChallenge((c) => {
          setStartTimeOfNextChallenge(undefined);

          return challenge;
        });
      } else if (result.upcoming) {
        setStartTimeOfNextChallenge((st) => {
          setChallenge(undefined);

          return new Date(result.upcoming);
        });
      } else {
        setChallenge(undefined);
        setStartTimeOfNextChallenge(undefined);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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

  useEffect(() => {
    if (!challenge && !startTimeOfNextChallenge && loading) {
      getChallenge();
    }
  }, []);

  useEffect(() => {
    setWalletAddress(address);
  }, [address]);

  const getTimerText = () => {
    if (startTimeOfNextChallenge && !challenge) {
      return "Challenge starts in: ";
    } else if (isRunning && challenge) {
      return "Challenge ends in: ";
    }

    return "";
  };

  const handleModelOpen = () => {
    modal.open();
  };
  return (
    <>
      <MainSection>
        <ContainerDiv>
          <div className="main-dev">
            <div className="first-div">
              <img
                src={navLogo}
                alt="nav-logo"
                className="img-div"
                onClick={() => window.open("https://pixelsaurus.io/ ")}
              />
              <div className="menus-div">
                <p
                  onClick={() => window.open("https://pixelsaurus.io/")}
                  className="menu-text"
                >
                  PixelSaurus® Main Site
                </p>
                <p
                  onClick={() =>
                    window.open("https://rawrcade.pixelsaurus.io/#games")
                  }
                  className="menu-text"
                >
                  Games
                </p>
                <p
                  onClick={() =>
                    window.open("https://rawrcade.pixelsaurus.io/#rawr")
                  }
                  className="menu-text"
                >
                  $RAWR
                </p>
                <p className="menu-text">Leaderboard (Coming Soon)</p>
              </div>
            </div>

            <div className="button-div-wrapper">
              {address ? (
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
                                {`${hours
                                  .toString()
                                  .padStart(2, "0")} : ${minutes
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
              ) : (
                <img
                  src={connectbtn}
                  className="btn-div"
                  onClick={handleModelOpen}
                />
              )}
            </div>

            <div className="hamburger-menu">
              {isCollapsed ? (
                <AiFillCloseCircle
                  className="icons"
                  onClick={() => setIsCollapsed(false)}
                />
              ) : (
                <GiHamburgerMenu
                  className="icons"
                  onClick={() => setIsCollapsed(true)}
                />
              )}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {isCollapsed && (
              <motion.div
                className="mobile-main-dev"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="inner-mobile-div">
                  <p
                    onClick={() => {
                      window.open("https://pixelsaurus.io/");
                      setIsCollapsed(false);
                    }}
                    className="mobile-menu-text"
                  >
                    PixelSaurus® Main Site
                  </p>{" "}
                  <p
                    onClick={() => {
                      window.open("https://rawrcade.pixelsaurus.io/#games");
                      setIsCollapsed(false);
                    }}
                    className="mobile-menu-text"
                  >
                    Games
                  </p>{" "}
                  <p
                    onClick={() => {
                      window.open("https://rawrcade.pixelsaurus.io/#rawr");
                      setIsCollapsed(false);
                    }}
                    className="mobile-menu-text"
                  >
                    $RAWR
                  </p>{" "}
                  <p className="mobile-menu-text">Leaderboard (Coming Soon)</p>
                  <img
                    src={connectbtn}
                    className="mobile-menu-btn"
                    onClick={handleModelOpen}
                  />
                  <AiFillCloseCircle
                    className="icons close-icon"
                    onClick={() => setIsCollapsed(false)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ContainerDiv>
      </MainSection>

      <div>
        <ChallengeGamePage
          walletAddress={walletAddress}
          startTimeOfNextChallenge={startTimeOfNextChallenge}
          challenge={challenge}
          loading={loading}
          getChallenge={getChallenge}
        />
        ;
      </div>
    </>
  );
};

export default Navbar;
