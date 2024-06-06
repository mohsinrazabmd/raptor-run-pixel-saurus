import { useEffect, useState } from "react";
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { Container } from "react-bootstrap";
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
import { useLocation, useNavigate } from "react-router-dom";
import { AdminWallets } from "utility/constant";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { disconnect } = useDisconnect();
  const [walletAddress, setWalletAddress] = useState("");
  const { address } = useWeb3ModalAccount();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const modal = useWeb3Modal();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState(undefined);
  const [startTimeOfNextChallenge, setStartTimeOfNextChallenge] =
    useState(undefined);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const logoutWallet = () => {
    console.log("logout");
    disconnect();
  };

  const getChallenge = async () => {
    try {
      setLoading(true);
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
    const isAdmin = AdminWallets.some((wallet) => {
      if (wallet && address && wallet.length && address.length) {
        return wallet.toLowerCase() === address.toLowerCase();
      } else {
        return false;
      }
    });
    setIsUserAdmin(isAdmin);
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

  const onlyNavbar =
    location.pathname === "/leaderboard" || location.pathname === "/";

  const visibleGmae = location.pathname === "/";

  return (
    <>
      {onlyNavbar && (
        <MainSection>
          <ContainerDiv>
            <div className="main-dev">
              <div className="first-div">
                <img
                  src={navLogo}
                  alt="nav-logo"
                  className="img-div"
                  onClick={() =>
                    window.open("https://rawrcade.pixelsaurus.io ")
                  }
                />
                <div className="menus-div">
                  <p
                    onClick={() =>
                      window.open("https://rawrcade.pixelsaurus.io/")
                    }
                    className="menu-text"
                  >
                    RAWRcade
                  </p>

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
                  <p
                    className="menu-text"
                    onClick={() => navigate("/leaderboard")}
                  >
                    Leaderboard
                  </p>
                </div>
              </div>
              <div className="button-div-wrapper">
                {address ? (
                  <>
                    <div className="address-class">
                      {walletAddress?.slice(0, 8)}
                      {walletAddress?.length > 8 && "..."}
                    </div>
                  </>
                ) : (
                  <img
                    src={connectbtn}
                    className="btn-div"
                    onClick={() => modal.open()}
                  />
                )}
              </div>{" "}
              {address && (
                <div
                  className="logout-button-div-wrapper"
                  onClick={() => logoutWallet()}
                >
                  <div className="address-class">Disconnect</div>
                </div>
              )}
              {isUserAdmin && (
                <div
                  className="logout-button-div-wrapper"
                  onClick={() => navigate("/admin")}
                >
                  <div className="address-class">Admin</div>
                </div>
              )}
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
                    <p
                      className="mobile-menu-text"
                      onClick={() => navigate("/leaderboard")}
                    >
                      Leaderboard
                    </p>
                    <div className="mobile-button-div-wrapper">
                      {address ? (
                        <div className="address-class">
                          {walletAddress?.slice(0, 8)}
                          {walletAddress?.length > 8 && "..."}
                        </div>
                      ) : (
                        <img
                          src={connectbtn}
                          className="mobile-menu-btn"
                          onClick={() => modal.open()}
                        />
                      )}
                    </div>
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
      )}

      {visibleGmae && (
        <div>
          <ChallengeGamePage
            walletAddress={walletAddress}
            startTimeOfNextChallenge={startTimeOfNextChallenge}
            challenge={challenge}
            loading={loading}
            getChallenge={getChallenge}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
