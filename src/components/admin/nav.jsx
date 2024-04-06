import React from "react";
// import { useNavigate } from "react-router-dom";
import { LoginButton, LogoText, NavDiv } from "./elements";
import { AdminAuthService } from "services/adminAuthService";

const Navbar = () => {
  // const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await AdminAuthService.logout();

      if (response && response.message === "success") {
        window.location.reload();
      }
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
