import React from "react";
import { LogoutBtn, ProfileBtn, UserModalWrapper } from "./elements";
import { MainContainer } from "components/common/mainStyle/mainStyle";
import { Image } from "react-bootstrap";
import { usericon } from "assets";
import { Link } from "react-router-dom";
import { useDisconnect } from "@web3modal/ethers5/react";
import { CommonUtility } from "utility/common";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

const ProfileModal = ({ onClose }) => {
  const { disconnect } = useDisconnect(); // Destructuring to get the disconnect method

  const handleClick = () => {
    disconnect();
    localStorage.clear();
    onClose();
  };

  const { address } = useWeb3ModalAccount();

  return (
    <UserModalWrapper>
      <Image src={usericon} />
      <Link to="/profile">
        <ProfileBtn>Profile</ProfileBtn>
      </Link>
      <Link to="/">
        <LogoutBtn onClick={handleClick}>Logout</LogoutBtn>
      </Link>

      <p className="address-text">{CommonUtility.addressConvertor(address)}</p>
    </UserModalWrapper>
  );
};

export default ProfileModal;
