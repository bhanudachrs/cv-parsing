import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
  display: block;
  background: ${colors.neon};
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  // max-width: 1800px;
  // margin: auto;
  -webkit-backface-visibility: hidden;
  @media (min-width: ${screenSizes.mediaS}px) {
    -webkit-backface-visibility: hidden;
    // height: 80px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 39px;
  width:auto;
  margin-top: 22px;
  // border:2px solid red;s
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-top: 8px;
    height: 54px;
    width: auto;
    margin-left: 20px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    
    margin-left: 30px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 40px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-left: 40px;
  }
`;

export const AppName = styled.div`
cursor: pointer;
margin:18px 0px 0px 10px;
font-size:34px;
padding:5px 10px;
font-weight:bold;
font-family : Monospace ;
color:${colors.black};
@media (min-width: ${screenSizes.mediaS}px) {
  margin:10px 0px 0px 15px;
}


&:hover {
  color:${colors.white};
  // background: #1b2732;
  border-radius: 4px;
}
`

export const NavTabs = styled.ul`
  list-style: none;
  transition: all 0.3s;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: ${screenSizes.mediaS}px) {
    display : none;
  }
`;
export const NavTab = styled.li<any>`
  cursor: pointer;
  position: relative;
  
  // display: flex;
  a {
    padding: 15px 20px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: ${colors.white};
    text-decoration: none;
    display: inline-block;
    font-size: 25px;

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
`;


