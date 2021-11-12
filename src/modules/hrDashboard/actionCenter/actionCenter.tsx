import React from 'react'
import { MainContainer } from '../../../shared/styles/styled'
import { Container, LeftContainer, RightContainer } from '../../dashboard/style'


const ActionCenter = () => {
    return(<Container>
        <LeftContainer>
            <h1>
            Bhanu Prasad
            </h1>
            <h3> Activity </h3>
            <div >  Saved jobs </div>
            <div > Job alerts </div>
            <div> Action Center </div>
            </LeftContainer>
            <RightContainer>
        <MainContainer>
            Action center Coming Soon ... !!
            </MainContainer>
            </RightContainer>
            </Container>
    )
}

export default ActionCenter