import styled from "styled-components";
import { colors, screenSizes } from "../styles/theme";
interface ModalBodyProps {
  show: boolean;
}

export const ModelHead = styled.div`
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h2 {
    margin: 13px 0 0 0;
    font-size: 16px;
    font-family:'Medium';
    letter-spacing: 0.5px;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 20px;
    }
  }
`;

export const ModalBody = styled.div<ModalBodyProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(29, 26, 40, 0.8);
  backdrop-filter: blur(0px);
`;



export const ModalContent = styled.div<any>`
  padding: 20px;
  border-radius: 24px !important;
  background-color: ${colors.base};
  display: inline-block;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid #615d71;
  overflow: auto;
  // min-width: 280px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  // overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 80%;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 524px;
  }
`;

export const ModalContainerHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`;
export const ModalContainerText = styled.p`
  font-size: 16px;
  margin: 0;
`;

// export const CloseButton = styled.div`
//   display: flex;
//   p {
//     font-family: Light;
//     font-weight: 300;
//     font-size: 14px;
//     color: ${colors.white};
//     margin: 0 10px;
//     @media (min-width: ${screenSizes.mediaM}px) {
//       font-size: 18px;
//     }
//   }

//   img {
//     height: 25px;
//     cursor: pointer;
//   }
// `;


export const CloseButton = styled.div`
  display: flex;
  p {
    color: ${colors.white};
    font-family: Light;
    font-size: 16px;
    margin-right: 14px;
    margin-top: 13px;
  }
`;
export const Close = styled.img`
  margin-bottom: 10px;
  cursor: pointer;
  margin-right: auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-bottom: 78px;
    cursor: pointer;
    margin-right: 0;
  }
`;