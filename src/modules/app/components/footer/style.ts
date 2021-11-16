import styled from "styled-components";
import { colors } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
padding: 20px 40px;
background : #1b2732;
 h3 {
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.yellow};
 }
  p {
    font-family: san-serif;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-align: center;
    color: ${colors.white};
  }

  a {
    margin-right: 20px;
  }
  img {
    height: 24px;
  }
`;

export const GridContainer = styled.div`
display : grid;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 40px;
`

export const GridItem = styled.div`
  
`
