import React from 'react'
import { MainContainer } from '../../../shared/styles/styled'
import { Container, LeftContainer, RightContainer } from '../../dashboard/style'
import { MainSection } from '../profile/style'

const SavedJobs = () => {
    return(
        <Container>
         <LeftContainer>
                <h1>
                    Tips
                </h1>
                <h3> Learn more about saved jobs </h3>
                {/* <div >  Saved jobs </div>
            <div > Job alerts </div>
            <div> Action Center </div> */}
                <p>You can save any job you search for by clicking on the star icon on the job details page. 
                    Changed your mind and want to unselect a saved job? Just click on the star icon again. 
                    If the job you saved has closed, it may still show in your saved jobs. 
                    Just click on the bin icon
                </p>
            </LeftContainer>
            <RightContainer>
            <MainSection>
             <h1>Saved jobs</h1>
             <div>
             You have no saved jobs. Start your search!​
                </div>
                    </MainSection>
            </RightContainer>
            </Container>
    )
}

export default SavedJobs