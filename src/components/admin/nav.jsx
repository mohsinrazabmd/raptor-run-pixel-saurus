import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { LoginButton, LogoText, NavDiv } from "./elements";
import { AdminAuthService } from "services/adminAuthService";
import { UserService } from "services/userServices";
import { useDisconnect } from "@web3modal/ethers5/react";

const Navbar = () => {
  const { disconnect } = useDisconnect(); // Destructuring to get the disconnect method


  const logout = async () => {
    try {
      disconnect()
      // const response = await AdminAuthService.logout();

      // if (response && response.message === "success") {
      //   window.location.reload();
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <NavDiv>
        <LogoText>AdminPanel</LogoText>
        <LoginButton onClick={() => logout()}>logout</LoginButton>
      </NavDiv>
    </div>
  );
};

export default Navbar;
