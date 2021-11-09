import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";
import { Button } from "../../shared/components/button";



export const VideoContainer = styled.div`
position: fill;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:700px;
overflow: hidden;
`
export const HeadingContainer = styled.div`
position: absolute; 
top: 100px; 
left:200px;  
font-family: sans-serif;
h1 {
  color: #1b2732;
  font-size:50px;
}
h3 {
  color:${colors.white};
  font-size:30px;
}
h6 {
  color:${colors.white};
  font-size:20px;
}
`

export const Container = styled.div`
margin : 20px 100px;

h1 {
  font-size : 50px;
}

h3 {
  font-size : 25px;
}
`

export const GridContainer = styled.div`
display : grid;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 40px;
`

export const GridItem = styled.div`
  img {
    height : 250px;
    width:250px;
    &:hover {
        transform: scale(1.1);
    }
  }

p {
  font-family: sans-serif;
  // font-weight:600px;
  font-size : 20px;
}
`

export const FlexContainer = styled.div`
display : flex;
justify-content : space-around;

img {
  vertical-align:middle;
  height:50px;
  width:50px;
  &:hover {
    transform: scale(1.0);
}
}
span  {
  vertical-align:middle;
font-size : 25px;
}


`

export const FlexItem = styled.div`

`