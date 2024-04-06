import React, { useEffect } from "react";
import { useAppSelector } from "../store/store";
// import env from "../types/environment";
// import { WebglGamesUrlProps } from "./index";
import { MainWrapper } from "./styles";
import environment from "environment";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
// import CommonConstants from "../constants/common";
const s3Url = "https://metaminigames.s3.amazonaws.com/public/";

const RaptorRunGame = ({
  //   metaUser,
  screenWidth,
  challengeId,
  walletAddress,
  //   competitionId,
  //   challenge,
  //   grandToken,
}) => {
  useEffect(() => {
    // This code replaces the <script> tags from the HTML.
    function aFunctionImplementedInHtmlFile(jsString) {}
    const scriptLoader = document.createElement("script");
    scriptLoader.src = s3Url + "raptor-run/Build/WebGL.loader.js";
    document.body.appendChild(scriptLoader);
    const scriptExternal = document.createElement("script");
    const secret = process.env.REACT_APP_SECRET;

    if (walletAddress?.length > 0) {
      const code = `
      async function aFunctionImplementedInExternalJsFile(jsString) {
        const score = Number(jsString);

        const start_time = Math.floor(Date.now() / 1000);
      
        const body = {
          user: "${String(walletAddress.toString())}",
          score,
          start_time,
          challenge: "${String(challengeId)}",
          nine:'hello'
        };
        
      
        const stringified = JSON.stringify(body);

        const encryptedBody = CryptoJS.AES.encrypt(
          stringified,
          "${secret}"
        ).toString();

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: encryptedBody }),
        };
      
        const url = "${environment.BACKEND_BASE_URL}/create-game-score";
      
        await fetch(url, options);
      };
      `;

      scriptExternal.textContent = code;
      document.body.appendChild(scriptExternal);
    } else {
      const code = `
      async function aFunctionImplementedInExternalJsFile(jsString) {
        console.log("")
        
      }
    `;

      scriptExternal.textContent = code;
      document.body.appendChild(scriptExternal);
    }

    const scriptCryptoJs = document.createElement("script");
    scriptCryptoJs.src =
      "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js";
    document.body.appendChild(scriptCryptoJs);

    scriptLoader.onload = () => {
      window.createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: s3Url + "raptor-run/Build/WebGL.data",
        frameworkUrl: s3Url + "raptor-run/Build/WebGL.framework.js",
        codeUrl: s3Url + "raptor-run/Build/WebGL.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Game",
        productName: "Raptor Run",
        productVersion: "1.0",
      });
    };

    return () => {
      document.body.removeChild(scriptLoader);
      document.body.removeChild(scriptExternal);
      document.body.removeChild(scriptCryptoJs);
    };
  }, [walletAddress, walletAddress?.walletAddress]);

  return (
    <MainWrapper>
      <canvas id="unity-canvas" className="main-canvas-class"></canvas>
    </MainWrapper>
  );
};

export default RaptorRunGame;
