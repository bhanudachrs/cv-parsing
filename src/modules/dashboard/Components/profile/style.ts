import styled from "styled-components";
import { colors } from "../../../../shared/styles/theme";

export const Button = styled.button`
 border : 1px solid black;
 border-radius:4px;
 margin:10px 0px;
 background : transparent;
 width : 250px;
 cursor : pointer;
 display:flex;
 justify-content:flex-start ;
 padding : 10px 10px;
 img {
     width: 25px;
     vertical-align:middle;
 }

 b {
    padding : 2px 10px;
     font-size : 16px;
     vertical-align:middle;
 }

 &:hover { 
    // transform: scale(1.05);
    background:${colors.black};
    color:${colors.white}
}
`

export const ButtonContainer = styled.div`
 span {
    padding : 0px 10px;
    font-size : 16px;
 }
 `

 export const MainSection = styled.div`
   width : 800px;
  background : ${colors.yellow};
  border-radius: 4px;
  padding : 20px;
  h1 {
      padding:10px;
      border-bottom : 1px solid black;  
  }
 `

 export const GridContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
 `

 export const GridItem = styled.div`
 
 `
 export const InfoContainer = styled.div`
 border-bottom : 1px solid black;
 `