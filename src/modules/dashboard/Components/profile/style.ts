import styled from "styled-components";

export const Button = styled.button`
 border : 1px solid black;
 border-radius:4px;
 margin:10px 0px;
 background : transparent;
 width : 300px;
 cursor : pointer;

 img {
    padding : 10px 10px;
     height : 30px;
     width: 30px;
     vertical-align:middle;
 }

 span {

     font-size : 25px;
     vertical-align:middle;
 }
`

export const ButtonContainer = styled.div`
 span {
    padding : 0px 10px;
    font-size : 16px;
 }
 `