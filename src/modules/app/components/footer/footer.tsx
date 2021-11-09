import React, { useState } from "react";
import { FooterContainer, FooterFlex } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <p>connect with us</p>
      <FooterFlex>
        <a href="https://twitter.com/WSBDApp" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/twitter.svg").default}
            alt=""
          />
        </a>
        <a href="https://t.me/wallstreetbets" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/telegram.svg").default}
            alt=""
          />
        </a>
        <a href="https://www.youtube.com/channel/UCUvxcGE0XCWVPmflZiUXK-g" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/youTube.svg").default}
            alt=""
          />
        </a>
      </FooterFlex>
    </FooterContainer>
  );
};

export default Footer;
