import styled from "styled-components";
import { mainBG } from "assets";

export const AppWrapper = styled.div`
  background-image: url(${mainBG});
  min-height: calc(100vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .top-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .timer-div {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: rgb(130, 251, 1);
    font-size: 16px;
    border-radius: 0.25rem;
    color: rgb(0, 0, 0);
    border: none;
    font-weight: 600;
    padding: 2px 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }

  .iframes-wrapper {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    height: 550px;
    border: 1px solid #82fb01;

    iframe {
      border-radius: 10px;
      overflow: hidden !important;
    }
  }
`;

export const HeaderDiv = styled.div`
  background-color: #000905;
  padding: 0.5rem 0;
`;

export const MainSection = styled.section`
  .main-wrapper {
    max-width: 1536px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 224.5%; /* 2.52563rem */
  text-transform: capitalize;
  margin-bottom: 0rem;
`;

export const MainWrapper = styled.div`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #ab3bf6;
    box-shadow: -1px 2px 21.5px 0px rgba(171, 59, 246, 0.3);
    min-height: 550px;
    position: relative;

    @media (max-width: 576px) {
      min-height: 400px;
    }

    .main-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;

      @media (max-width: 576px) {
        object-fit: cover;
      }
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
      top: 50%;
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
