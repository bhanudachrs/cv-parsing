import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const Button = styled.button`
 border : 1px solid black;
 border-radius:4px;
 margin:10px 0px;
 background : transparent;
 cursor : pointer;
 width : 250px;
 display:flex;
 justify-content:flex-start ;
 padding : 10px 10px;
 img {
     width: 25px;
     vertical-align:middle;
 }

 b {
    font-weight:500;
    padding : 2px 10px;
     font-size : 16px;
     vertical-align:middle;
 }

 &:hover { 
    // transform: scale(1.05);
    background:${colors.gray};
    color:${colors.white}
}
@media (min-width: ${screenSizes.mediaS}px) {
}
`

export const ButtonContainer = styled.div`
 span {
    padding : 0px 10px;
    font-size : 16px;
 }
 `

 export const MainSection = styled.div`
  background : ${colors.whiteSmoke};
  border-radius: 4px;
  padding : 20px;
  h1 {
      padding:10px;
      border-bottom : 1px solid black;  
      font-weight:500;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    width : 800px; 
}
 `

 export const GridContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
 `

 export const GridItem = styled.div`
 h3 {
     font-size:16px;
 }
 
 `
 export const InfoContainer = styled.div`
 border-bottom : 1px solid black;
 `