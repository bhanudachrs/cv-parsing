import React from 'react'
import { MainContainer } from '../../../../shared/styles/styled'
import history from '../../../app/components/history'
import { Button, Container, Input } from '../../style'

const CanSignIn = () => {

    const toDashboard = () => {
        history.push("/dashboard")
    }
return(
    <MainContainer>
    <Container>
    <h1> Hello Candidate .. !! </h1>
    <h3> Full Name </h3>
    <Input placeholder="What is your name ?" />
    <h3> Email Id </h3>
    <Input placeholder="Tell us ur email id" />
    <h3> Password </h3>
    <Input placeholder="Create a password  for ur account" />
    <h3> Mobile Number </h3>
    <Input placeholder="Mobile Number" />

    <Button onClick={toDashboard} style={{marginTop : "50px"}}>
        Register
        </Button>
         </Container>
         </MainContainer>
)
}

export default CanSignIn