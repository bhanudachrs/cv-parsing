import React from 'react'
import { MainContainer } from '../../../shared/styles/styled'
import { Container, LeftContainer, RightContainer } from '../../dashboard/style'
import { MainSection } from '../profile/style'

const JobAlerts = () => {
    return (
        <Container>
            <LeftContainer>
                <h1>
                    Tips
                </h1>
                <h3> Learn more about saved searches and alerts </h3>
                {/* <div >  Saved jobs </div>
            <div > Job alerts </div>
            <div> Action Center </div> */}
                <p>You can save up to 10 searches by clicking on create alert on the Search jobs page. 
                    You can also choose to receive email alerts at a frequency you most prefer. 
                    No longer want the receive the email alerts? Just set the email frequency to 'None'.
                     Want to delete the saved search altogether? Just click on 'Remove' under Actions.
                </p>
            </LeftContainer>
            <RightContainer>
            <MainSection>
             <h1>Your job alerts </h1>
             <div>
             You have no job alerts set up. Go to search jobs to set one up!
                </div>
                    </MainSection>
            </RightContainer>
        </Container>
    )
}

export default JobAlerts