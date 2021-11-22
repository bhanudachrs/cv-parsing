import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
background : ${colors.whiteSmoke};
width:100%;
font-family: Sans-serif ;
 h3 {
   font-weight:400;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.black};
 }
  
`;

export const GridContainer = styled.div`
display : grid;
grid-template-columns: repeat(2, 1fr);
@media (min-width: ${screenSizes.mediaS}px) {
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
}
@media (min-width: ${screenSizes.mediaS}px) {
  padding: 0px 120px;
}
`

export const GridItem = styled.div`
p {
  cursor:pointer;
  font-weight:300;
  font-size: 14px;
  // line-height: 23px;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${colors.black};
}
@media (min-width: ${screenSizes.mediaS}px) {
  padding: 20px 0px;
}
`
