import styled from "styled-components";

export const UserModalWrapper = styled.div`
  overflow: hidden;
  width: 12.1875rem;
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 200;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5625rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 991.98px) {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 575.98px) {
    width: 90%;
  }

  .address-text {
    color: black !important;
    font-weight: 600;
    font-size: 16px;
    cursor: default !important;
    margin-bottom: 0rem;
    margin-top: 1rem;
  }
`;

export const ProfileBtn = styled.button`
  color: #000;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 0.375rem;
  border: 0.587px solid #86ec27;
  width: 7.8125rem;
  height: 1.8125rem;
  background: transparent;
  margin-top: 1.3rem;
`;

export const LogoutBtn = styled.button`
  border-radius: 0.375rem;
  background: #86ec27;
  width: 7.8125rem;
  height: 1.8125rem;
  color: #000;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  margin-top: 1.3rem;
`;
