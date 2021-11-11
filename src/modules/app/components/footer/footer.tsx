import React, { useState } from "react";
import { FooterContainer, GridContainer, GridItem } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <GridContainer>
        <GridItem>
          <h3>Freelancer</h3>
          <p> Categories</p>
          <p> Projects </p>
          <p> Contests</p>
          <p> Freelancers </p>
          <p> Enterprise</p> 
          </GridItem>
          <GridItem>
          <h3>About</h3>
          <p> About Us</p>
          <p> How It works </p>
          <p> Security</p>
          </GridItem>
          <GridItem>
          <h3> Terms </h3>
          <p> Privacy Policy</p>
          <p> Terms and Conditions </p>
          <p> Copyright Policy </p>
          <p> Fees and Charges </p>
          </GridItem>
          <GridItem>
          <h3> Developer </h3>
          <p> Visual Studio </p>
          <p> Tech Network </p>
          <p> Office Dev</p>
          <p> Git hub </p>
          <p> Rec Helper.pvt.ltd</p> 
          </GridItem>
        </GridContainer>

        
    </FooterContainer>
  );
};

export default Footer;
