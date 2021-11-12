import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
  display: block;
  background: ${colors.neon};
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 100000;
  // max-width: 1800px;
  // margin: auto;
  -webkit-backface-visibility: hidden;
  @media (min-width: ${screenSizes.mediaS}px) {
    -webkit-backface-visibility: hidden;
    height: 80px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 34px;
  margin-top: 20px;
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

export const AppName = styled.div`
cursor: pointer;
height: 34px;
// margin-top: 4px;
font-size:40px;
padding:0px 10px;
font-family : Monospace ;
@media (min-width: ${screenSizes.mediaS}px) {
  // margin-top: 5px;
  height: 54px;
  margin-bottom: 0px;
  // width: 130px;
  margin-left: 40px;
}

&:hover {
  color:${colors.white};
  background: #1b2732;
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


