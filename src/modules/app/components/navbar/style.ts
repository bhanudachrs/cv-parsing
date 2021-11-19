import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
  display: block;
  background: ${colors.black};
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

  .item {
    color:yellow;
    // color:${colors.white};
    // background:${colors.black}
    // cursor: pointer;
    // font-family: sans-serif;
    // font-style: normal;
    // font-weight: 600;
    // font-size: 15px;
    // line-height: 15px;
    // letter-spacing: 0.05em;
    // border:none;
    }
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 34px;
  margin-top: 18px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-top: 0px;
    height: 54px;
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
margin:18px 0px 0px 10px;
font-size:40px;
padding:0px 10px;
font-family : Monospace ;
color:${colors.white};
@media (min-width: ${screenSizes.mediaS}px) {
  margin:13px 0px 0px 15px;
  height: 54px;
}

&:hover {
  // background: ${colors.lightGray};
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
export const NavTab = styled.div<any>`
  cursor: pointer;
  position: relative;
  padding: 28px 10px;
  letter-spacing: 0.05em;
  a {
   
    font-family: sans-serif;
    font-style: normal;
    color: ${colors.white};
    text-decoration: none;
    display: inline-block;
    font-size: 18px;

    ${(props) =>
      props.isActiveTab
        ? `
        border-bottom: 2px solid ${colors.white};
       border-radius: 4px;
    `
        : `
        background:transparent;
       
      `}
  }
  &:hover {
    background: ${colors.lightGray};
    border-radius: 4px;

    a {
      color: ${colors.white};
      opacity: 1;
    }
  }
`;


export const Item = styled.div`

.item {
  color:yellow;
// color:${colors.white};
// background:${colors.black}
// cursor: pointer;
// font-family: sans-serif;
// font-style: normal;
// font-weight: 600;
// font-size: 15px;
// line-height: 15px;
// letter-spacing: 0.05em;
// border:none;
}
`

