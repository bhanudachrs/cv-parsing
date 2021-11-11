import React from 'react'
import { MainContainer } from '../../../../shared/styles/styled'
import { Button, ButtonContainer, GridContainer, GridItem, InfoContainer, MainSection } from './style'
import linkedIn from "../../../../assets/icons/LinkedIn_logo.png"
import Upload from "../../../../assets/icons/upload_logo.png"
import { colors } from '../../../../shared/styles/theme'
import { Container, LeftContainer, RightContainer } from '../../style'

const Profile = () => {
    return (
        <Container>
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
        <MainContainer >
            <MainSection>
                <h1>
                    Manage Profile
                </h1>
                <div>
                    Create your profile by importing your information from LinkedIn or by updating a resume.<br />
                    Please ensure you profile is complete and contains enough information.
                </div>
                <ButtonContainer>
                    <Button>
                        <img src={linkedIn} />
                        <span> <b>Import from LinkedIn  </b>
                        </span>
                    </Button>
                    <span>
                        *Your full LinkedIn profile will be provided to RecHelper.
                    </span>
                </ButtonContainer>

                <ButtonContainer>
                    <Button>
                        <img src={linkedIn} />
                        <span> <b>Upload Resume </b>
                        </span>
                    </Button>
                    <span>
                        *Your inormation will be uploaded to RecHelper Profile.
                    </span>
                </ButtonContainer>
                <ButtonContainer>
                    <span>
                        *Want to make updates on your profile ? Click on edit profile below. You can also use this option to simply fill out oyour profile.
                    </span> <br />
                    <Button>
                        <img src={linkedIn} />
                        <span> <b>Edit </b>
                        </span>
                    </Button>

                </ButtonContainer>
            </MainSection>
            <MainSection>
                <h1>
                    Resume
                </h1>
                <div>You can replace your resume by clicking on Upload resume above and selecting a new file.<br />
                You can have only one resume attached to youe profile </div>
                <GridContainer>
                    <GridItem>
                <h3>File Name
                        </h3>
                        <span>
                             Bhanu Prasad
                            </span>
                        </GridItem>
                        <GridItem>
                        <h3>Actions
                        </h3>
                        <span>
                             Download
                            </span>
                        </GridItem>
                        <GridItem>
                        <h3>Last Updated on
                        </h3>
                        <span>
                             10-11-2021
                            </span>
                        </GridItem>
                    </GridContainer>
            </MainSection>
            <MainSection>
            <h1>
                   Profile Summary
                </h1>
                <InfoContainer>
                    <h3>
                        Contact Information
                        </h3>
                        <h5>Preferred Name : </h5>
                            <p> Bhanu Prasad </p>

                            <h5>Email :</h5>
                            <p> prasadbhanu703@gmail.com </p>
                            <h5>Address : </h5>
                            <p> 17-94, Warangal, Telangana, India. </p>
                            <h5>Mobile Number : </h5>
                            <p> 9876543210 </p>
                            <h5> Social URL : </h5>
                            <p> <a href = "https://www.linkedin.com/in/bhanu-prasad-5a1021181/" target="_blank"
                                 style={{textDecoration:"none"}}> 
                            https://www.linkedin.com/in/bhanu-prasad-5a1021181/ </a> </p>
                    </InfoContainer>
                    <InfoContainer>
                    <h3>
                        Experience
                        </h3>
                        <h5>Front End Developer </h5>
                            <p> DACHRS </p>
                            <p> October 2021  </p>
                            <p> Projects list will be displayed here  </p>
                    </InfoContainer>

                    <InfoContainer>
                    <h3>
                       Education
                        </h3>
                        <h5>CVR College Of Engineering </h5>
                            <p> Computer Science & Engineering, Hyderabad </p>
                            <p> March 2016-MArch 2020 | Telangana  </p>

                        <h5>Spectra Concept School </h5>
                            <p> Secondary high School, Warangal </p>
                            <p> March 2013-MArch 2014 | Telangana  </p>

                           
                    </InfoContainer>

                    <InfoContainer>
                    <h3>
                       Additional Information
                        </h3>
                        <h5>Skills : </h5>
                            <p> C , Java , HTML5,CSS3, </p>
                            <p> React js, React ts, Java Script, Type Script </p>
                            <p> Node js, Express Js, MongoDB </p>
                            
                        <h5>Spectra Concept School </h5>
                            <p> Secondary high School, Warangal </p>
                            <p> March 2013-MArch 2014 | Telangana  </p>

                            <h3>
                       Are You Willing to Relocate
                        </h3>
                        <p> Yes</p>
                    </InfoContainer>

                    <InfoContainer>
                    <h3>
                       Attachments
                        </h3>
                        <GridContainer>
                            <GridItem>
                                <h3> File Name </h3>
                                <p> Bhanu Prasad.pdf </p>
                                <p> Preetika singh.pdf </p>
                                </GridItem>
                                <GridItem>
                                <h3> Actions </h3>
                                <p> Download </p>
                                <p> Download </p>
                                </GridItem>
                            </GridContainer>
                    </InfoContainer>
                </MainSection>
        </MainContainer>
        </RightContainer>
                </Container>
    )
}

export default Profile