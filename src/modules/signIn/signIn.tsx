import React from 'react'
import { MainContainer } from '../../shared/styles/styled'
import history from '../app/components/history'
import { Container, Input, Button } from './style'

const SignIn = () => {

    const toCandidate = () => {
        history.push("/canSignIn")
    }
    const toHr = () => {
     history.push("/hrSignIn")
    }
    return(
    <MainContainer>
        <Container>
            <h1>Welcome to RecHelper .. !!</h1>

            <p> *I'm looking to create my profile and  looking for a potential job </p>
            <Button onClick={toCandidate}>
                Yes, I'm A Candidate
                </Button>

                <p> *I'm looking to hire awesome people for my company </p>
            <Button onClick={toHr}>
                Yes, I'm A Recruiter
                </Button>
            </Container>
    </MainContainer>
    )
}

export default SignIn