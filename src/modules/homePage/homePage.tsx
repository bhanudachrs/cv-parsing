import  React from "react";
import { Container, FlexContainer, GridContainer, GridItem, HeadingContainer, VideoContainer } from "./style";
//@ts-ignore
import Video from '../../assets/videos/video.mp4';
import Freelancer from '../../assets/image/Freelancer.png'
import { MainContainer } from "../../shared/styles/styled";
const HomePage = () => {

  return (
    <MainContainer>
      <VideoContainer>
        <video autoPlay loop muted src={Video} />
      </VideoContainer>
      <HeadingContainer>
        <h1>
          #HR
        </h1>
        <h3>
          A Helping Hand To All The HR's
        </h3>
        <h6>
          Sign Up today and hire your candidates easily.
        </h6>

        <h1>
          #Candidate
        </h1>
        <h3>
          It's never too late to be what you might have been
        </h3>
        <h6>
          Just tap the Sign in and choose the interested role.
        </h6>
      </HeadingContainer>
      {/* // Container 1 */}
      <Container>
        <h1>
          Make it Real with HR.
        </h1>
        <h3>
          Get some Inspirations from 1800+ skills
        </h3>
        <GridContainer>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Logo Design.
              $30 USD in 1 day.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Package Design.
              $280 USD in 4 days.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Mobile Design.
              $600 USD in 4 days.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              WordPress.
              $45 USD in 1 day
            </h3>
          </GridItem>
        </GridContainer>
      </Container>

      {/* // Container 2 */}
      <Container>
        <h1>
          Make it Real with Candidate.
        </h1>
        <h3>
          Get some Inspirations from 1800+ skills
        </h3>
        <GridContainer>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              WordPress.
              $150 USD in 18 days.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Package Design.
              $100 USD in 6 days.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Mobile Design.
              $100 USD in 1 day.
            </h3>
          </GridItem>
          <GridItem>
            <img src={Freelancer} />
            <h3>
              Package Design.
              $155 USD in 2 days.
            </h3>
          </GridItem>
        </GridContainer>
      </Container>


      {/* // Container 3 */}
      <Container>
        <h1>
        What's great about it?
        </h1>

        <GridContainer>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>Browse portfolios </b>
            </span >
            </FlexContainer>
            <p>
            Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.
              </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>
Fast bids </b>
            </span >
            </FlexContainer>
            <p>
            Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.              </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>Quality work </b>
            </span >
            </FlexContainer>
            <p>
            Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.               </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>Track progress </b>
            </span >
            </FlexContainer>
            <p>
            Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.              </p>
          </GridItem>          
        </GridContainer>
      </Container>

      {/* // Container 4 */}
      <Container>
        <h1>
        Need something done?
        </h1>

        <GridContainer>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>Post a jobs </b>
            </span >
            </FlexContainer>
            <p>
            It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.              </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>
Choose freelancers </b>
            </span >
            </FlexContainer>
            <p>
            No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!              </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>
Pay safely</b>
            </span >
            </FlexContainer>
            <p>
            Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.              </p>
          </GridItem>
          <GridItem>
            <FlexContainer>
            <img src={Freelancer} />
            <span >
             <b>
We’re here to help </b>
            </span >
            </FlexContainer>
            <p>
            Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.              </p>
          </GridItem>          
        </GridContainer>
      </Container>
    </MainContainer>
  );
};
export default HomePage;
