import React, { useEffect, useState } from "react";
import { MainSection } from "./elements";
import Navbar from "./nav";
import Tabs from "./tabs";
import { UserService } from "services/userServices";
import connectbtn from "../../assets/images/connectbtn.png";
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import environment from "environment";
import { AdminService } from "services";
import { CommonUtility } from "utility/common";

const AdminPanel = () => {
  const { disconnect } = useDisconnect();
  const { address } = useWeb3ModalAccount();
  const modal = useWeb3Modal();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    disconnect();
    localStorage.clear();
    window.location.reload();
  };

  const checkIsAdmin = async () => {
    try {
      const response = await AdminService.checkAdminAuth(address);
      CommonUtility.setAdminToken(response.data.token);
      console.log(response);
      setIsAdmin(true);
    } catch (error) {
      console.log(error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    checkIsAdmin();

    if (address) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [address]);

  return (
    <>
      {isAdmin ? (
        <MainSection>
          <Navbar />
          <Tabs />
        </MainSection>
      ) : isLoggedIn ? (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div>Unauthorized</div>
          <button onClick={() => logOut()}>Log out</button>
        </div>
      ) : (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src={connectbtn}
            className="btn-div"
            onClick={() => modal.open()}
          />
        </div>
      )}
    </>
  );
};

export default AdminPanel;
