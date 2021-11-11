import React, { useState } from 'react'
import { MainContainer } from '../../shared/styles/styled'
import ActionCenter from './Components/actionCenter';
import JobAlerts from './Components/jobAlerts';
import Profile from './Components/profile';
import SavedJobs from './Components/savedJobs';
import { Container, DashboardContainer, HeadLineContainer, LeftContainer, RightContainer } from './style';

const DashBoard = () => {
    const [activeTab, setActiveTab] = useState("/Profile")
    return(
    <MainContainer>
        <DashboardContainer>
        <HeadLineContainer>
            <h3 onClick={() => setActiveTab("/Profile")}> Profile
                </h3>
                <h3 onClick={() => setActiveTab("/jobAlerts")}> Job alerts
                </h3>
                <h3 onClick={() => setActiveTab("/savedjobs")}> Saved jobs
                </h3>
                <h3 onClick={() => setActiveTab("/actionCenter")}> Action Center
                </h3>
            </HeadLineContainer>
           
                        {
                            activeTab === "/Profile" ? <Profile /> 
                            : activeTab === "/jobAlerts" ? <JobAlerts />  
                            : activeTab === "/savedjobs" ? <SavedJobs />  
                            : activeTab === "/actionCenter" ? <ActionCenter />  
                            : <Profile />
                        }
                        
                       
                </DashboardContainer>
        </MainContainer>
        )
}

export default DashBoard;