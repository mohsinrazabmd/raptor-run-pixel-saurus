import styled from "styled-components";

export const MainSection = styled.section`
  background-color: #000905;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;

  @media (max-width: 990px) {
    height: 100%;
  }

  .first-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding-right: 4rem;
  }
  .inner-mobile-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
    position: relative;
  }

  .close-icon {
    position: absolute;
    top: 35px;
    right: 15px;
  }

  .last-img-div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  .img-div {
    width: auto;
    height: 35px;
    cursor: pointer;
  }
  .menu-text {
    color: white;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 0rem;
  }

  .menu-text1 {
    color: white;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 0rem;
  }

  .btn-div {
    width: 170px;
    cursor: pointer;
    display: none;

    @media (min-width: 990px) {
      display: block;
    }
  }

  .icons {
    font-size: 28px;
    color: white;
    cursor: pointer;
  }

  .hamburger-menu {
    @media (min-width: 990px) {
      display: none;
    }
  }

  .mobile-main-dev {
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #000905;
  }

  .mobile-menu-text {
    color: white;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .mobile-menu-btn {
    width: 170px;
    cursor: pointer;
  }

  .main-dev {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menus-div {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;

    @media (max-width: 990px) {
      display: none;
    }
  }

  .profile-div {
    display: flex;
    align-items: center;
    gap: 1.3rem;
  }

  .modal-div {
    position: relative;
  }

  .button-div-wrapper {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .rawr-div {
    background: #86ec27;
    color: #000;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 5px 10px;
    border-radius: 10px;
  }
`;

export const ContainerDiv = styled.div`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (max-width: 1536px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const HeaderDiv = styled.div`
  background: #86ec27;
  color: #000;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 5px 10px;
  border-radius: 10px;
`;
