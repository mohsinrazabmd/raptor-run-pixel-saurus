import { modalbg } from "assets";
import styled from "styled-components";

export const ModelsData = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 40.8125rem;
  min-height: 25.6875rem;
  background-image: url(${modalbg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1.875rem;
  border: 1px solid #87e845;
  box-shadow: 0px 4px 33.3px 0px rgba(136, 229, 69, 0.28);

  @media (max-width: 420px) {
    width: 370px;
  }

  .icon {
    display: flex;
    justify-content: end;
    align-items: end;
    padding-right: 1rem;
    padding-top: 1rem;
  }

  .main-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin-top: 3rem;

    @media (max-width: 767px) {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const Title = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.84038rem; /* 73.615% */
  text-transform: uppercase;
  margin-top: 2.5rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.84038rem; /* 73.615% */
  text-transform: uppercase;
  margin-top: 2.5rem;
  padding: 0rem 1rem;
`;

export const ProfileBtn = styled.button`
  color: #000;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 0.6875rem;
  background: #82fb01;
  width: 10.625rem;
  height: 2.9375rem;
  border: none;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
