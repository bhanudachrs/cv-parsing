import React from 'react'
import { MainContainer } from '../../../../shared/styles/styled'
import { Button, ButtonContainer } from './style'
import linkedIn from "../../../../assets/icons/LinkedIn_logo.png"
import Upload from "../../../../assets/icons/upload_logo.png"

const Profile = () => {
    return (
        <MainContainer>
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
                <img src={Upload} />
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
                <img src={Upload} />
                <span> <b>Edit </b>
                    </span>
                </Button>
                
                    </ButtonContainer>
       </MainContainer>
    )
}

export default Profile