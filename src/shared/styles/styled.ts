import styled from "styled-components";
import { colors, screenSizes } from "./theme";

export interface ButtonAreaProps {
  gradient?: string;
  disabled?: boolean;
}
export const MainContainer = styled.div`
  margin : 80px 0px;
  letter-spacing: 0.02em;
  font-family: Sans-serif;
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const ButtonArea = styled.div`
  height: 58px;
  ${(props: ButtonAreaProps) =>
    props.disabled === true &&
    `
background:${colors.base} !important;
border:none!important;
height:64px !important;
`}

  background: ${(props: ButtonAreaProps) => props.gradient};
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 80px;

  width: max-content;
`;


export const ButtonAreaDark = styled.div`
  height: 58px;
  ${(props: ButtonAreaProps) =>
    props.disabled === true &&
    `
background:#1C1A28 !important;
border:none!important;
height:64px !important;
`}

  background: ${(props: ButtonAreaProps) => props.gradient};
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 80px;

  width: max-content;
`;

export const ButtonAreaSm = styled.div`
  ${(props: ButtonAreaProps) =>
    props.disabled === true &&
    `
background:${colors.base} !important;
border:none!important;
`}

  background: ${(props: ButtonAreaProps) => props.gradient};
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 80px;
  height: 36px;
  width: max-content;
`;

export const CircularButtonArea = styled.div`
  ${(props: ButtonAreaProps) =>
    props.disabled === true &&
    `
background:${colors.base} !important;
border:none!important;
`}

  background: ${(props: ButtonAreaProps) => props.gradient};
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  height: 44px;
  width: max-content;
`;
