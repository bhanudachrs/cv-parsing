import { css, ThemeProps } from "styled-components";
import { colors, ThemeStarter, screenSizes } from "../../styles/theme";
import styled from "styled-components";

export interface ButtonProps {
  margin?: string;
  priority?: string;
  theme: ThemeProps<ThemeStarter>;
  type?: string;
  background?: string;
  color?: string;
  gradient?: string;
}

const buttonStyles = css`
  display: inline-block;
  margin: ${(props: ButtonProps) => props.margin};
  background: ${(props: ButtonProps) => props.background};
  color: ${(props: ButtonProps) => props.color};
  outline: 0;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  font-family: Light;
  transition: all 0.1s;
  padding: 10px 24px 12px 9px;
  height: 44px;
  width: 44px;
  letter-spacing: 0.1em;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: translate(3px,-2px);
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 14px;
  }

  &:hover {
    transform: translate(3px, -4px);
    border: 1px solid #fff;
  }


  &:active {
    transform: translate(1px, -1px);
    border: 1px solid #fff;
  }
 

  &:disabled {
    cursor: initial;
    background: #1D1B28;
    opacity: 0.5;
    color: white;
    &:hover {
      box-shadow: none;
    }
    &:after {
      content: "";
      border:none;
    }
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }

 
`;

export const CircularButton = styled.button<any>`
  ${buttonStyles}
`;
