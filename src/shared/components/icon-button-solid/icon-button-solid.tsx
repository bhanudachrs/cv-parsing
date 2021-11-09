import { css, ThemeProps } from "styled-components";
import { colors, ThemeStarter, screenSizes } from "../../styles/theme";
import styled from "styled-components";

export interface ButtonProps {
  margin?: string;
  icon?: string;
  priority?: string;
  theme: ThemeProps<ThemeStarter>;
  type?: string;
  background?: string;
  color: string;
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
  outline: 0;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  color: ${(props: ButtonProps) => props.color};
  cursor: pointer;
  font-family: Extended;
  text-transform: uppercase;
  transition: all 0.1s;
  height: 46px;
  border: none;
  border-radius: 80px;
  position: relative;
  padding: 0px 25px 0 45px;
  transform: translate(2px,-4px);
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 14px;
  }

  &:disabled {
    cursor: initial;
    border: none;
    &:hover {
      box-shadow: none;
    }
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }
 
  &:before {
    display: block;
    position: absolute;
    top: -8px;
    z-index: -1;
    border-radius: 5px;
    position: absolute;
    top: 9px;
    left: 20px;
    z-index: 1;
    content: url(${(props: ButtonProps) => props.icon});
  }
 
  &:hover {
    transform: translate(3px, -5px);
  }


  &:active {
    transform: translate(1px, -1px);
    border: 1px solid #fff;
  }
`;

export const IconButtonSolid = styled.button<any>`
  ${buttonStyles}
`;
