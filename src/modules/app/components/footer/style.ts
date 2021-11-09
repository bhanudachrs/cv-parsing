import styled from "styled-components";
import { colors } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
padding: 20px 40px;
  p {
    font-family: Regular;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
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

export const FooterFlex = styled.div`
  display: flex;
  justify-content: center;
`;
