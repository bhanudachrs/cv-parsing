import React from 'react'
import { MainContainer } from '../../../../shared/styles/styled'
import { Button, Container, Input } from '../../style'

const HrSignIn = () => {
return(
    <MainContainer>
    <Container>
    <h1> Hello Recruiter .. !! </h1>
    <h3> Full Name </h3>
    <Input placeholder="What is your name ?" />
    <h3> Email Id </h3>
    <Input placeholder="Tell us ur email id" />
    <h3> Password </h3>
    <Input placeholder="Create a password  for ur account" />
    <h3> Mobile Number </h3>
    <Input placeholder="Mobile Number" />

    <Button style={{marginTop : "50px"}}>
        Register
        </Button>
         </Container>
         </MainContainer>
)
}

export default HrSignIn