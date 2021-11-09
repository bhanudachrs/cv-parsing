import * as React from "react";
import { CircularButton } from "../components/circular-button";
import { CircularButtonArea } from "../styles/styled";
import { colors } from "../styles/theme";
import { ModalBody, ModalContent, CloseButton, ModelHead,Close } from "./style";

const CustomModal = (props: any) => {
  const { show, toggleModal, borderRadius, close, heading,styles } = props;
  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  };

  return (
    <ModalBody show={show} onMouseDown={handleClickOutside} style={{...styles}}>
      <ModalContent borderRadius={borderRadius}>
      <ModelHead>
        <h2> {heading}</h2>
         <CloseButton>
         <p>Close</p>
            <CircularButtonArea  onClick={() => toggleModal(!show)}>
              <CircularButton background={colors.base}>
                <Close
                  src={require("../../assets/icons/cross.svg").default}
                />
              </CircularButton>
            </CircularButtonArea>
           
          </CloseButton>
      </ModelHead> 
      {props.children}
      </ModalContent>
    </ModalBody>
  );
};
export default CustomModal;
