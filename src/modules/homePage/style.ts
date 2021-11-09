import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";
import { Button } from "../../shared/components/button";

export const FarmContainer = styled.div`
  margin: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 0px 20px 20px 300px;
  }
`;
export const FarmMainHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  flex-direction: column-reverse;
  padding-top: 10px;
  @media (min-width: ${screenSizes.mediaM}px) {
    flex-direction: row;
    padding-top: 30px;
  }
`;

export const MenuImage = styled.img`
width: 50%;
height: auto;
margin-top: 15px;
@media (min-width: ${screenSizes.mediaM}px) {
  width: 48%;
}
@media (min-width: ${screenSizes.mediaL}px) {
  width: 56%;
}
@media (min-width: ${screenSizes.mediaXL}px) {
  width: 68%
}
`;

export const TimeRemainingWrap = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid;
  background: linear-gradient(225deg, #00d7e7 13.21%, #fbec5b 91.07%);
  border-radius: 16px;
  height: 100%;
`;

export const TimeRemaining = styled.div`
  margin: 1px;

  text-align: center;
  background: ${colors.base};
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;

  @media (min-width: ${screenSizes.mediaM}px) {
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 65%;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 80%;
  }
`;

export const FlexCoin = styled.div`
  display: flex;
  margin: 30px 10px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 0;
  }

  img {
    height: 40px;
    margin-right: 20px;
  }
  h2 {
    font-family: Medium;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 0;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 36px;
    }
  }

  p {
    font-family: Light;
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: ${colors.white};
    margin: 5px 0;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 20px;
      margin: 18px 2px;
    }
  }
`;

export const FarmHeading = styled.div`
  display: none;
  h2 {
    font-size: 18px;
    line-height: 23px;
    color: ${colors.white};
    font-family: Medium;
    text-transform: uppercase;
    margin-left: 5%;
    margin-bottom: 0;
    margin-top: 25px;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
  }
`;

export const HeadPart = styled.h2`
  font-size: 14px;
  line-height: 23px;
  color: ${colors.white};
  font-family: Medium;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 15px;
  text-align: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Green = styled.span`
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: ${colors.green};
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const CardArea = styled.div`
  border: 1px solid #615d71;
  border-radius: 26px;
  margin-bottom: 25px;

  @media (min-width: ${screenSizes.mediaM}px) {
    margin-bottom: 0;
  }
`;

export const NewCardArea = styled.div`
  border: 1px solid #615d71;
  border-radius: 26px;
  margin-bottom: 25px;

  &:nth-child(1) {
    background: linear-gradient(225deg, #00d7e7 13.21%, #fbec5b 91.07%);
    border-radius: none;
  }

  @media (min-width: ${screenSizes.mediaM}px) {
    margin-bottom: 0;
  }
`;

export const AppContainer = styled.div``;

export const SideNav = styled.div`
  height: 100%;
  background: ${colors.base};
  text-align: center;
  border-right: 1px solid #413764;
  display: none;
  position: fixed;
  z-index: 0;
  width: 270px;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: block;
  }
`;

export const MobileLogo = styled.div`
  display: block;
  text-align: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 100px;
  margin-top: 30px;
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 120px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 130px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 135px;
  }
`;

export const SideWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export const ViewContract = styled.div`
  padding: 20px;
  border-bottom: 1px solid #615d71;
  border-top: 1px solid #615d71;
  display: flex;
  justify-content: center;
  span {
    font-size: 14px;
    line-height: 16px;
    font-family: Light;
    color:${colors.white};
    cursor:pointer;
  }
  img{
    margin: -4px 0 0 10px !important;
    cursor:pointer;
  }
`;

export const FixedSideOptions = styled.div`
  background: ${colors.base};
  margin-top: 10px;
  border-top: 1px solid #615d71;
  left: 0;
  img {
    display: block;
    margin: 0 auto 25px auto;
    cursor: pointer;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const FooterContainer = styled.div`
 
  p {
    font-family: Light;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.white};
  }

  a {
    margin-right: 20px;
  }
  img {
    height: 24px;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexToken = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px 0;
  img {
    margin: 0 20px 0 0;
  }
  h3 {
    font-family: Medium;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 0;
  }

  p {
    font-family: Light;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 0;
  }
`;

// const breatheAnimation = keyframes`
// @keyframes {
//   0% {  transform: rotateY(0deg);}
// 25% {  transform: rotateY(180deg);}
// 50% {  transform: rotateY(360deg);}
// 75% {  transform: rotateY(180deg);}
// 100% {  transform: rotateY(0deg);}
// }
// @-webkit-keyframes keyarm {
//   0% { -webkit-transform: rotate(0deg); }
//   5% { -webkit-transform: rotate(-14deg); }
//   10% { -webkit-transform: rotate(0deg); }
//   100% { -webkit-transform: rotate(0deg); }
// }
//  `;

// export const CoinImage = styled.img`
//   animation: ${breatheAnimation} 1.3s linear infinite;
// `;

export const CoinImage = styled.img`
  animation: breatheAnimation 1.3s linear infinite;

  @keyframes breatheAnimation {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(180deg);
    }
    50% {
      transform: rotateY(360deg);
    }
    75% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  @-webkit-keyframes breatheAnimation {
    0% {
      -webkit-transform: rotate(0deg);
    }
    5% {
      -webkit-transform: rotate(-14deg);
    }
    10% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
  @-moz-keyframes breatheAnimation {
    0% {
      -webkit-transform: rotate(0deg);
    }
    5% {
      -webkit-transform: rotate(-14deg);
    }
    10% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
`;

export const StatsArea = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 20px;
  margin-top: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Portfolio = styled.div`
  border: 1px solid #615d71;
  border-radius: 24px;
  background: #1d1a28;
  padding: 20px;

  h1 {
    font-size: 20px;
    line-height: 23px;
    color: ${colors.white};
    font-family: Medium;
    margin-bottom: 15px;
  }
`;

export const PortfolioRow = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 18px;
    line-height: 21px;
    color: ${colors.white};
    font-family: Light;
    font-weight: 300;
    margin: 10px 0;
  }
  p {
    font-size: 18px;
    line-height: 21px;
    color: ${colors.white};
    font-family: Medium;
    margin: 10px 0;
  }
`;

export const MobileContent = styled.div`
  display: block;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;

export const GraphArea = styled.div`
  border: 1px solid #615d71;
  border-radius: 24px;
  background: #1d1a28;
//   padding: 20px;
  margin-bottom:20px;

  @media (min-width: ${screenSizes.mediaS}px) {
   margin-bottom:0
  }

  h1 {
    font-size: 20px;
    line-height: 23px;
    color: ${colors.white};
    font-family: Medium;
    text-transform: uppercase;
    margin: 20px;
  }
`;

export const GraphInfo = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 14px;
    line-height: 16px;
    color: ${colors.white};
    font-family: Light;
    font-weight: 300;
    margin: 8px 0;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    color: ${colors.white};
    font-family: Medium;
    margin: 8px 0;
  }
`;

export const CompoundRow = styled.div`
  display: grid;
  grid-gap: 0px;
  padding: 20px;
  border-bottom: 1px solid #615d71;
  grid-template-columns: repeat(1, 1fr);

  &:last-child {
    border-bottom: none;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  h3 {
    font-size: 14px;
    line-height: 16px;
    color: ${colors.white};
    font-family: Light;
    color: ${colors.white};
    font-weight: 300;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: ${colors.white};
    font-family: Extended;
    margin: 0;
  }
`;
export const SemiHead = styled.p`
  font-size: 12px;
  line-height: 19px;
  font-family: Light;
  margin: 0;
  color: white;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 40px 0 10px 0;
  justify-content: space-between;
  flex-direction: column-reverse;

  @media (min-width: ${screenSizes.mediaM}px) {
    flex-direction: row;
  }
`;

export const InputWrapper = styled.input`
display: inline-block;
margin: 20px 0;
background: #37324B;
color: #ffffff;
outline: 0;
border-radius: 2px;
font-size: 16px;
cursor: pointer;
font-family: Regular;
transition: all 0.1s;
padding: 1px 14px;
height: 60px;
letter-spacing: 0.1em;
border-radius: 26px;
border: 1px solid #fff;
position: relative;
width:45%;
@media (min-width: ${screenSizes.mediaM}px) {
  font-size: 18px;
  margin: 20px;
width:59%;

}
&:after {
  content: "";
  border: 1px solid #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: -3px;
  height: 100%;
  border-radius: 26px;
  border: 1px solid #fff;
  position: relative;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 18px;
  }
  &:after {
    content: "";
    border: 1px solid #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: -3px;
    height: 100%;
    border-radius: 26px;
    top: 2px;
    z-index: -1;
  }

  &:disabled {
    cursor: initial;
    background: transparent !important;

    opacity: 0.5;
    &:hover {
      box-shadow: none;
    }
    &:after {
      content: "";
      border: none;
    }
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }
`;

export const WsbBalanceWrap = styled.div`

 background:#2D283F;
color:${colors.white};
font-size: 12px;
line-height: 19px;
font-family:Extended;
border: 1px solid #615D71;
border-radius: 30px;
padding: 12px 25px 7px 25px;
height: 25px;
margin-left: auto;
margin-right: 10px;
display:none;

@media (min-width: ${screenSizes.mediaM}px) {
  font-size: 16px;
  display:block;
}
`;


export const FeeText = styled.h3`
font-size: 14px;
line-height: 16px;
color:${colors.white};
font-family:Light;
margin:20px;
font-weight:300;
`;

export const ErrorText = styled.div`
  color: ${colors.white};
  font-size: 14px;
  line-height: 16px;
  font-family: Light;
  text-align: center;
`;