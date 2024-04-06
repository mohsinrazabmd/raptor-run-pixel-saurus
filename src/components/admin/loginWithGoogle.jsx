import React from "react";
import { GoogleLoginBtn, LoginWithGoogleWrapper } from "./elements";

const LoginWithGoogle = () => {
  const loginWithGoogle = () => {
    window.open(
      `${process.env.REACT_APP_BACKEND_BASE_URL}authenticate-admin`,
      "_self"
    );
  };

  return (
    <div>
      <LoginWithGoogleWrapper>
        <GoogleLoginBtn onClick={loginWithGoogle}>
          Sign In With Google
        </GoogleLoginBtn>
      </LoginWithGoogleWrapper>
    </div>
  );
};

export default LoginWithGoogle;
