import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
background : #1b2732;
width:100%;
font-family: Sans-serif ;
 h3 {
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.yellow};
 }
  
`;

export const GridContainer = styled.div`
display : grid;
grid-template-columns: repeat(2, 1fr);
@media (min-width: ${screenSizes.mediaS}px) {
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
}
`

export const GridItem = styled.div`
p {
  font-size: 14px;
  // line-height: 23px;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${colors.white};
}
@media (min-width: ${screenSizes.mediaS}px) {
  padding: 20px 40px;
  p {
    font-size: 18px;
  }
}
`
