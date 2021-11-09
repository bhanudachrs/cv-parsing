import styled from "styled-components";
import { colors,screenSizes } from "../../styles/theme";

export const ToggleDivWrap = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid;
  background: linear-gradient(225deg, #00d7e7 13.21%, #fbec5b 91.07%);
  border-radius: 45px;
  height: 100%;
  margin-top: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 0px;
  }

`;

export const ToggleDiv = styled.div`
  margin: 1px 1px 1px 1px;

  .react-switch-checkbox {
    height: 0;
    width: 0;
    display: none;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    height: 55px;
    background: ${colors.base};
    border-radius: 40px;
    position: relative;
    transition: background-color 0.2s;
    @media (min-width: ${screenSizes.mediaL}px) {
      width: 252px;
      height: 74px;
    }
  }
  .react-switch-label .react-switch-button {
    border-radius: 45px;
    transition: 0.2s;
    color: #b6b2cc;
    text-align: center;
    padding: 15px 0;
    width: 50%;

    font-family: 'Light';
    font-size: 18px;

    @media (min-width: ${screenSizes.mediaL}px) {
      width: 50%;
      padding: 24px 0;
    }
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    // left: calc(100% - 2px);
    // transform: translateX(-100%);
  }

  // .react-switch-label:active .react-switch-button {
  //   width: 60px;
  // }

  .react-switch-text-Y {
    font-family: "Light";
    position: absolute;
    left: 31px;
    font-size: 14px;
    color: ${colors.black};
  }
  .react-switch-text-N {
    font-family: "Light";
    position: absolute;
    left: 31px;
    font-size: 14px;
    color: ${colors.black};
  }
`;
