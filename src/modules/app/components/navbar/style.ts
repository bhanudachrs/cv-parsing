import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
  display: block;
  background: ${colors.yellow};
  height: auto;
  position: fixed;
  width: 100%;
  z-index: 100000;
  max-width: 1800px;
  margin: auto;
  -webkit-backface-visibility: hidden;
  @media (min-width: ${screenSizes.mediaS}px) {
    -webkit-backface-visibility: hidden;
    height: 80px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  padding: 10px 20px;
  margin-top: 0px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-top: 10px;
    padding: 0px;
  }
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 34px;
  margin-top: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-top: 5px;
    height: 54px;
    margin-bottom: 0px;
    width: 130px;
    margin-left: 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-left: 40px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 80px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-left: 100px;
  }
`;

export const ToggleMenu = styled.img`
  display: block;
  margin: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: none;
  }
`;

export const NavTabs = styled.ul`
  list-style: none;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 510px) {
    margin: 0 50px 0 0;
  }
  @media (min-width: 850px) {
    margin: 0 0 0 140px;
  }
`;
export const NavTab = styled.li<any>`
  cursor: pointer;
  position: relative;
  display: flex;
  a {
    font-family: sans serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: ${colors.white};
    text-decoration: none;
    display: inline-block;
    padding: 10px 10px;
    @media (min-width: ${screenSizes.mediaS}px) {
      padding: 14px 10px;
      font-size: 16px;
    }
    @media (min-width: ${screenSizes.mediaM}px) {
      padding: 14px 18px;
    }
    @media (min-width: ${screenSizes.mediaXL}px) {
      padding: 14px 18px;
    }

    ${(props) =>
      props.isActiveTab
        ? `
       background:#1B2732;
       border-radius: 4px;
    `
        : `
        background:transparent;
       
      `}
  }
  &:hover {
    background: #1b2732;
    border-radius: 4px;

    a {
      color: ${colors.white};
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 20px;
    right: 0px;
    @media (min-width: ${screenSizes.mediaXL}px) {
      right: 12px;
    }
  }
`;

export const MobileOptions = styled.div`
display: block;
position: fixed;
background: #000;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10000;
    
@media (min-width: ${screenSizes.mediaS}px) {
none;
}
`;

export const MobileOptionHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavTabsMobile = styled.ul`
  list-style: none;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const NavTabMobile = styled.li<any>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 20px;
  }

  a {
    font-family: sans serif;
    font-style: normal;
    font-weight: 600;
    font-size: 4px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    opacity: 0.4;
    text-decoration: none;
    ${(props) =>
      props.isActiveTab
        ? `
        opacity: 1;
        color:${colors.neon};
    `
        : `
        color:${colors.white};
        opacity: 0.4;
      `}
  }
  &:hover {
    a {
      color: ${colors.neon};
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 16px;
  }
`;

export const Separator = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 0.5px;
  height: 20px;
  margin-top: 20px;
`;

export const NavWrap = styled.div`
  //   display: flex;
  // justify-content:space-between;
  // width: 92%;
  //   @media (min-width: ${screenSizes.mediaS}px) {
  //     display: none;
  //   }
`;

export const BetaTag = styled.span`
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  font-family: regular;
  color: ${colors.white};
  margin-top: 10px;
`;
export const Audit = styled.div`
  display: flex;
  margin-top: 24px;
  margin-right:50px;
  @media (min-width: 850px) {
    margin-right:20px;
  }
  a {
    font-family: SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.white};
    margin: -2px 0 0 10px;
  }
`;

export const AuditLogo = styled.img`
height: 16px;
`;
