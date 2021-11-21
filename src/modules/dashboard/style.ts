import styled from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";

export const DashboardContainer = styled.div`
margin : 10px 10px;
letter-spacing: 0.01em;
font-family: Sans-serif ;
@media (min-width: ${screenSizes.mediaS}px) {
    margin : 50px 100px;
 }  
`

export const HeadLineContainer = styled.div`
display : flex;
justify-content : space-around;
border-bottom : 1px solid #1b2732;

h3 {
    cursor:pointer; 
    color : ${colors.black};
    padding: 5px 10px;
    font-size:15px;
    &:hover {
        background:  ${colors.gray};
        border-radius: 4px;    
        color : ${colors.white};
    }
}
@media (min-width: ${screenSizes.mediaS}px) {
    margin : 50px 100px;
    h3 {
        font-size:20px;
        padding: 5px 10px;
    }
 }  
`

export const Container = styled.div`
display : flex ;
flex-direction:column;
justify-content : flex-start;
margin:30px 0px;
// color:${colors.whiteSmoke};

h1 {
    font-size: 20px;
}
@media (min-width: ${screenSizes.mediaS}px) {
    flex-direction:row;
h1 {
    font-size: 35px;
}
 }  
`

export const LeftContainer = styled.div`
padding : 0px 40px; 
h1 {
    border-bottom:1px solid black;
    padding : 10px 0px;
}
h3 {
    padding : 10px 5px;
    font-size:16px;
}

div {
    
    cursor : pointer;
    padding : 10px 0px;
    font-size:16px;
    border-bottom:1px solid black;
    &:hover { 
        transform: scale(1.05);
    }
} 
p {
    line-height: 23px;
  letter-spacing: 0.05em;
}
@media (min-width: ${screenSizes.mediaS}px) {
    padding : 10px 20px; 
    width:30%;
    h1 {
        padding : 20px 0px;
    }
    h3 {
        font-size:20px;
    }
    
    div {
        font-size:18px;
    } 
} 
`

export const RightContainer = styled.div`
padding : 30px 20px; 
@media (min-width: ${screenSizes.mediaS}px) {
    padding : 10px 20px; 
}
`