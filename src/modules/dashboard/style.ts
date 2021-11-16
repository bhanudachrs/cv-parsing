import styled from "styled-components";
import { colors } from "../../shared/styles/theme";

export const DashboardContainer = styled.div`
margin : 50px 100px;
`

export const HeadLineContainer = styled.div`
display : flex;
justify-content : space-around;
border-bottom : 1px solid #1b2732;

h3 {
    cursor:pointer; 
    color : ${colors.black};
    padding: 5px 10px;
    font-size:20px;
    &:hover {
        background: #1b2732;
        border-radius: 4px;    
        color : ${colors.white};
    }
}
`

export const Container = styled.div`
display : flex ;
justify-content : flex-start;
margin:30px 0px;
h1 {
    font-size: 35px;
}
`

export const LeftContainer = styled.div`
padding : 10px 20px; 
width:30%;
h1 {
    border-bottom:1px solid black;
    padding : 20px 0px;
}
h3 {
    padding : 10px 0px;
    font-size:20px;
}

div {
    cursor : pointer;
    padding : 10px 0px;
    font-size:18px;
    border-bottom:1px solid black;
    &:hover { 
        transform: scale(1.05);
    }
} 

`

export const RightContainer = styled.div`
padding : 10px 20px; 

`