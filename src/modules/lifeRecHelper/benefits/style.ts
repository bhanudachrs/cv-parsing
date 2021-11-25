import styled from "styled-components";
import { colors, screenSizes } from "../../../shared/styles/theme";
export const ImageContainer = styled.div`
position: fill;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:500px;
overflow: hidden;
`
export const HeadingText = styled.h2`
    font-size: 3.56666667rem;
    line-height: 56px;
    color: #000;
    font-family: 'segoe-ui_light';
    font-weight: lighter;
    word-break: break-word;

    @media (max-width: ${screenSizes.mediaXS}px) {
      font-size: 1.86666667rem;
        line-height: 30px;
    }
    @media (min-width: ${screenSizes.mediaXS}px) {
        font-size: 1.86666667rem;
        line-height: 30px;
    }
    @media (min-width: ${screenSizes.mediaS}px) {
        font-size: 2.26666667rem;
        line-height: 40px;
    }
      @media (min-width: ${screenSizes.mediaM}px) {
        font-size: 3.06666667rem;
        line-height: 50px;
      }
      
      @media (min-width: ${screenSizes.mediaXL}px) {
        font-size: 3.26666667rem;
        line-height: 56px;
      }
`
export const PText = styled.p`
font-size:18px;
margin:10px 20px;
line-height: 1.42857;
@media (max-width: ${screenSizes.mediaXS}px) {
  font-size: 15px;
}
@media (min-width: ${screenSizes.mediaXS}px) {
  font-size: 15px;
}
@media (min-width: ${screenSizes.mediaS}px) {
  font-size: 15px;
}
@media (min-width: ${screenSizes.mediaM}px) {
  font-size: 16px;
}

@media (min-width: ${screenSizes.mediaXL}px) {
  font-size: 18px;
}
`
export const Imgsection = styled.div`
width:100%;
overflow: hidden;
`