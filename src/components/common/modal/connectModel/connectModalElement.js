import { modalbg } from "assets";
import styled from "styled-components";

export const MainModel = styled.div``;

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

export const MainDiv = styled.div`
  border-radius: 0.52006rem;
  border: 2.496px solid rgba(179, 252, 131, 0.2);
  background: #012211;
  width: 10.42975rem;
  height: 12.25rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px) {
  }
  img {
    width: 4.94069rem;
    height: 4.52463rem;
    flex-shrink: 0;
    object-fit: contain;
  }

  h5 {
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.84038rem; /* 163.952% */
    margin-top: 2rem;
    text-transform: uppercase;
  }

  &:hover {
    border-radius: 0.52006rem;
    border: 2.496px solid #b3fc83;
    background: #012211;

    h5 {
      color: #b3fc83;
    }
  }
`;
