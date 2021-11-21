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
left:20px;  
font-family: sans-serif;
h1 {
  color: ${colors.black};
  font-size:40px;
  font-weight: 600;
}
h3 {
  color:${colors.white};
  font-size:18px;
  font-weight: 200;
}
h6 {
  color:${colors.white};
  font-size:14px;
  font-weight: 100;
}
@media (min-width: ${screenSizes.mediaS}px) {
  left:200px; 
  h1 {
    font-size:50px;
  }
  h3 {
    font-size:30px;
  }
  h6 {
    font-size:20px;
  }
}
`

export const Container = styled.div`
padding : 20px 90px;

h1 {
  font-size : 30px;
  font-weight: 400;
}

h3 {
  font-size : 18px;
  font-weight: 300;
}
p {
  line-height: 23px;
  letter-spacing: 0.05em;
}
@media (min-width: ${screenSizes.mediaS}px) {
  padding : 20px 240px;

h1 {
  font-size : 40px;
  font-weight: 400;
}

h3 {
  font-size : 18px;
  font-weight: 300;
}
}
`

export const GridContainer = styled.div`
display : grid;
grid-template-columns: repeat(1, 1fr);
grid-column-gap: 40px;

@media (min-width: ${screenSizes.mediaS}px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: ${screenSizes.mediaM}px) {
  grid-template-columns: repeat(3, 1fr);
}

@media (min-width: ${screenSizes.mediaXL}px) {
  grid-template-columns: repeat(4, 1fr);
}
`

export const GridItem = styled.div`
  img {
    height : 160px;
    width:160px;
    border-radius:10px;
    &:hover {
        transform: scale(1.1);
    }
  }

p {
  font-size : 16px;
  font-family: sans-serif;
}
`

export const FlexContainer = styled.div`
display : flex;
justify-content : flex-start;

img {
  vertical-align:middle;
  height:50px;
  width:50px;
  &:hover {
    transform: scale(1.0);
}
}

b {
  vertical-align:middle;
  font-size : 20px;
  font-weight: 500;
  padding:10px 0px 0px 20px;
  
}

@media (min-width: ${screenSizes.mediaS}px) {
  span  {
  font-size : 25px;
  }
}

`

export const FlexItem = styled.div`

`