import React, { useState } from 'react'
import { MainContainer } from '../../shared/styles/styled';
import { DashboardContainer, HeadLineContainer } from '../dashboard/style';
import ActionCenter from './actionCenter';
import JobAlerts from './jobAlerts';
import Profile from './profile';
import SavedJobs from './savedJobs';

const HrDashboard = () => {
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
                            activeTab === "/Profile" ? <Profile setActiveTab={setActiveTab} /> 
                            : activeTab === "/jobAlerts" ? <JobAlerts />  
                            : activeTab === "/savedjobs" ? <SavedJobs />  
                            : activeTab === "/actionCenter" ? <ActionCenter />  
                            : <Profile setActiveTab={setActiveTab} />
                        }
                        
                       
                </DashboardContainer>
        </MainContainer>
        )
}

export default HrDashboard;