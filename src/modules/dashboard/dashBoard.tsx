import React from 'react'
import { MainContainer } from '../../shared/styles/styled'
import Profile from './Components/profile';
import { Container, DashboardContainer, HeadLineContainer, LeftContainer, RightContainer } from './style';

const DashBoard = () => {
    return(
    <MainContainer>
        <DashboardContainer>
        <HeadLineContainer>
            <h3> Profile
                </h3>
                <h3> Job alerts
                </h3>
                <h3> Saved jobs
                </h3>
                <h3> Action Center
                </h3>
            </HeadLineContainer>
            <Container>
                <LeftContainer>
                    <h1>
                    Bhanu Prasad
                    </h1>
                    <h3> Activity </h3>
                    <div>  Saved jobs </div>
                    <div> Job alerts </div>
                    <div> Action Center </div>
                    </LeftContainer>
                    <RightContainer>
                        <h1>
                        Manage Profile
                        </h1>
                        <Profile />
                        </RightContainer>
                </Container>
                </DashboardContainer>
        </MainContainer>
        )
}

export default DashBoard;