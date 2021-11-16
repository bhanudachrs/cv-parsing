import styled from "styled-components";
import { colors } from "../../shared/styles/theme";

export const Container = styled.div`
 margin : 80px 20%;
 h1 {
    margin : 60px 20%; 
 }
 p {
     font-family:Sans-serif;
     font-size:16px;
    // margin : 10px 10%;
    // line-height: 23px;
    letter-spacing: 0.05em;
    // text-transform: uppercase;
    text-align: center;
 }
`

export const Input = styled.input`
width : 100%;
border-radius :4px;
padding : 10px 20px;
font-size:16px;
border : 1px solid ${colors.gray}
`

export const Button = styled.button`
margin : 10px auto;
background : ${colors.neon};
padding : 10px 50px;
border-radius :10px;
border : none;
font-size:18px;
cursor : pointer;
text-transform: uppercase;
font-family : Monospace  ;
&:hover {
    color:${colors.black};
    background: ${colors.yellow};
    transform: scale(1.1);
}
`
export const Label = styled.label`
 margin : 50px 0px;
 color: #00D7E7
 font-family:Sans-serif;
 font-size:18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-align: center;
    font-weight:bold
 `
 export const CardContent = styled.div`
 margin : 40px 50px;
`
export const ErrText = styled.div`
color:#d32f2f;
font-size:12px;
`