import styled from "styled-components";

export const MainSection = styled.section`
  background-color: black;
  min-height: 100vh;
`;

export const LogoText = styled.h5`
  color: white;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`;

export const LoginButton = styled.button`
  background-color: #82fb01;
  border: none;
  color: black;
  padding: 5px 20px;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
`;

export const TabsButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  width: 200px;
  height: 40px;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;

  &.active {
    background-color: #82fb01;
  }
`;

export const TabsBtmWrappers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const TableDiv = styled.div`
  margin-top: 2rem;
  .table {
    width: 100% !important;
  }
  .table > :not(caption) > * > * {
    background-color: transparent !important;
  }

  .table-top-header {
    color: white;
  }

  .table-btn-div {
    button {
      background-color: #82fb01;
      border: none;
      color: black;
      width: 80px;
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 5px;
      height: 30px;
    }
  }
`;

export const UserTabSection = styled.section`
  .search-bar {
    display: flex;
    justify-content: end;
    align-items: end;
  }

  .search-input {
    width: 25%;
    background-color: #82fb01;
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0px 10px;
    color: black;
    &:focus {
      box-shadow: none;
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 13px;
    }
  }
`;

export const MainHeader = styled.h2`
  color: white;
  font-size: 2.4375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
`;

export const FormWrapper = styled.div`
  margin-top: 4rem;

  .form-label {
    color: white;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  .form-control {
    border-radius: 0.28713rem;
    border: 0.145px solid #82fb01 !important;
    background: linear-gradient(180deg, #191a1c 0%, rgba(25, 26, 28, 0) 100%);
    height: 36.607px !important;
    margin-top: 10px;
    color: white !important;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

    &:focus {
      box-shadow: none !important;
    }
  }

  .main-row {
    margin-top: 4rem;

    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }

  .ant-picker {
    border-radius: 0.28713rem;
    border: 0.145px solid #82fb01 !important;
    background: linear-gradient(180deg, #191a1c 0%, rgba(25, 26, 28, 0) 100%);
    width: 100%;
    height: 36.607px !important;
  }

  .ant-picker-suffix {
    color: white !important;
  }

  .ant-picker-input > input {
    color: white !important;

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

    &::placeholder {
      color: white !important;
    }
  }

  .main-col {
    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }

  ._inputItem_18w4i_1 {
    min-width: 42px;
    border-radius: 4.594px;
    border: 0.345px solid #82fb01;
    background: linear-gradient(180deg, #191a1c 0%, rgba(25, 26, 28, 0) 100%);
    color: #fff;
    font-size: 12px;
    padding: 7px 10px;
  }

  .btn-div {
    display: flex;
    justify-content: end;
    align-items: end;
    margin-top: 4rem;

    button {
      background-color: #82fb01;
      border: none;
      color: black;
      padding: 5px 20px;
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 5px;
    }
  }
`;

export const ChallengeTableDiv = styled.div`
  margin-top: 4rem;

  .table {
    width: 100% !important;
  }
  .table > :not(caption) > * > * {
    background-color: transparent !important;
  }

  .table-top-header {
    color: white;
  }

  .table > :not(caption) > * > * {
    color: white;
  }

  .table-btn-div {
    button {
      background-color: #82fb01;
      border: none;
      color: black;
      width: 80px;
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 5px;
      height: 30px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const LoginWithGoogleWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleLoginBtn = styled.div`
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  max-width: 200px;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;
