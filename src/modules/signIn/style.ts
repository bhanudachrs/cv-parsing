import styled from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
 margin : 80px 20%;
 
 p {
     font-family:Sans-serif;
     font-size:14px;
    // margin : 10px 10%;
    // line-height: 23px;
    letter-spacing: 0.05em;
    // text-transform: uppercase;
    text-align: center;
 }
 @media (min-width: ${screenSizes.mediaS}px) {
    margin : 80px 20%;
    h1 {
        margin : 60px 20%; 
     }
     p {
        font-size:16px;
    }
 }  
`

export const Input = styled.input`
width : 100%;
border-radius :4px;
padding : 10px 20px;
font-size:16px;
border : 1px solid ${colors.lightGray}
`

export const Button = styled.button`
margin : 10px 0px;
background : ${colors.lightGray};
padding : 10px 20px;
border-radius :10px;
border : none;
font-size:18px;
cursor : pointer;
text-transform: uppercase;
font-family : Monospace  ;

&:hover {
    color:${colors.white};
    // background: ${colors.lightGray};
    // transform: scale(1.1);
}

@media (min-width: ${screenSizes.mediaS}px) {
    margin : 10px 30%;
    padding : 10px 50px;
 }  
`