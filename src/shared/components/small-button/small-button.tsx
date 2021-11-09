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

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

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
  padding: 8px;
  height: 36px;
  letter-spacing: 0.1em;
  border-radius: 80px;
  border: 1px solid #fff;
  transform: translate(2px,-4px);
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 16px;
  }

  &:hover {
    transform: translate(3px, -5px);
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
      transform: translate(2px,-4px);
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

export const SmallButton = styled.button<any>`
  ${buttonStyles}
`;
