import styled from "styled-components";
import { mainBG } from "assets";

export const LeaderboardWrapper = styled.div`
  background-image: url(${mainBG});
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  h1 {
    color: white;
    text-align: center;
    margin-top: 1rem;
  }

  .leaderboard-table-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-inline: 15rem;

    @media (max-width: 1536px) {
      padding-inline: 8rem;
    }

    @media (max-width: 991px) {
      padding-inline: 2rem;
    }

    @media (max-width: 576px) {
      padding-inline: 1rem;
    }
  }
`;

export const CardWrapper = styled.div`
  border-radius: 0.625rem;
  background: #000905;
  width: 100%;
  min-height: 19.375rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  border: 1px solid rgb(130, 251, 1);
`;

export const DataDiv = styled.div`
  padding: 1rem;
  width: 100%;
  position: relative;

  .header-image-div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: fit-content;
    width: fit-content;

    h1 {
      color: #000;
      text-align: center;
      font-size: 10px;
      font-style: normal;
      font-weight: 900;
      text-transform: uppercase;
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }

  h1 {
    color: #fff;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 224.5%; /* 1.68375rem */
    text-transform: capitalize;

    @media (max-width: 767px) {
      font-size: 0.55rem;
    }
  }
  .inner-content-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #22222a;
    padding: 1rem;
    border-radius: 40px;
    position: relative;

    .index-tag {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1000px;
      background: #000905;
    }

    p {
      color: #000;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 0.5rem;
      border-radius: 1000px;
      width: 38px;
      height: 38px;
      background-color: rgb(130, 251, 1);
    }

    h4 {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;

      span {
        color: rgb(130, 251, 1);
      }
    }
  }

  .h-divider {
    margin-top: -10px;
    width: 100%;
    height: 1px;
  }

  .content-div {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MainDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
