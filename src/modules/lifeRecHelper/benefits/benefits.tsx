import React from "react";
import { styled } from '@mui/material/styles';
import { MainContainer } from "../../../shared/styles/styled";
import Grid from '@mui/material/Grid';
import benefitsHero from "../../../assets/image/benefitshero.jpg"
import BenefitsImg1 from "../../../assets/image/benefitscommunity1.jpg";
import BenefitsImg2 from "../../../assets/image/benefitflexable2.jpg"
import BenefitsImg3 from "../../../assets/image/benefitsgrow3.jpg"
import BenefitsImg4 from "../../../assets/image/benefitsinvest4.jpg"
import { ImageContainer, HeadingText, PText, Imgsection } from "./style"


const Benefits = () => {
    return (
        <MainContainer>
            <Grid container>
                <Grid item xs={12}>
                    <ImageContainer>
                        <img src={benefitsHero} />
                    </ImageContainer>
                </Grid>
                <Grid item xs={12}>
                    <HeadingText style={{ textAlign: "center" }}>Supporting and investing in our employees</HeadingText>
                    <PText>What we do here at Microsoft matters. We can't achieve our mission to empower everyone on the planet to achieve more unless our employees can do their best work. Our perks, benefits and everything between are essential to our success. Some small, some large, all necessary. Learn about how Microsoft cares, supports and invests in our employees so they can help us empower the world.</PText>
                </Grid>
                <Grid container style={{ padding: "80px 50px" }}>
                    <Grid item xs={12} md={6} sm={12} >
                        <Imgsection>
                            <img width="100%" src={BenefitsImg1} />
                        </Imgsection>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <HeadingText style={{ margin: "10px 40px" }}>Build a community with Microsoft​</HeadingText>
                        <PText>Our employees make the most of their experience by creating their own community. Through Employee Resource Groups (ERGs), social and networking groups, Microsoft is committed to helping you find opportunities to foster personal connections across global teams, participate in local engagements, and take part in global sustainability.

                            Giving is essential to being a global citizen. We help you volunteer, take advantage of matching programs, and make a difference in the lives of billions around the globe.


                            Be inspired by how our giving programs helped an employee launch The Next Step Initiative to support his local community and provide underfunded, minority-heavy schools with technology.</PText>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: "80px 50px", backgroundColor: "rgb(246, 246, 246)" }}>
                    <Grid item xs={12} md={6} sm={12}>
                        <HeadingText style={{ margin: "10px 40px" }}>Build a community with Microsoft​</HeadingText>
                        <PText>Our employees make the most of their experience by creating their own community. Through Employee Resource Groups (ERGs), social and networking groups, Microsoft is committed to helping you find opportunities to foster personal connections across global teams, participate in local engagements, and take part in global sustainability.

                            Giving is essential to being a global citizen. We help you volunteer, take advantage of matching programs, and make a difference in the lives of billions around the globe.


                            Be inspired by how our giving programs helped an employee launch The Next Step Initiative to support his local community and provide underfunded, minority-heavy schools with technology.</PText>

                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <Imgsection>
                            <img width="100%" src={BenefitsImg2} />
                        </Imgsection>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ padding: "80px 50px" }}>
                <Grid item xs={12} md={6} sm={12} >
                    <Imgsection>
                        <img width="100%" src={BenefitsImg3} />
                    </Imgsection>

                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                    <HeadingText style={{ margin: "10px 40px" }}>Grow professionally and personally</HeadingText>
                    <PText>From financial education and tuition assistance to specific program training, our employees have opportunities to expand their knowledge on a variety of topics, stay current in their field, and continue to learn as their career progresses.

                        We support employee growth with hundreds of online and in-person technical, management and professional development classes. With an ongoing visiting speaker series covering a broad range of topics by acclaimed speakers and our employee TechFest, we strive to ensure our employees can grow in their career knowledge.


                        Read about one employee's journey to grow confidence in her skills, become more comfortable with networking, and prepare her for the next stage of her career through the Microsoft Aspire Experience. </PText>
                </Grid>
                
            </Grid>
            <Grid container style={{ padding: "80px 50px", backgroundColor: "rgb(246, 246, 246)"}}>
                    <Grid item xs={12} md={6} sm={12} >
                        <HeadingText style={{ margin: "10px 20px" }}>Invest in your physical, emotional and financial wellbeing​</HeadingText>
                        <PText>With world-class health care benefits, along with our generous wellbeing benefits, you can achieve and maintain your best physical and emotional health for you and your family. ​

​And, with a robust offering of employee financial programs, you can build a savings and investment portfolio, protect your family from the unexpected, plan for college for your children, refinance your student loans, and get great discounts on products and services, so you can save money doing the things you love. ​


Experience how Microsoft supports the transgender community through benefits, employee resource groups like GLEAM and how our  culture at Microsoft is an essential part of allowing employees to bring their whole selves to work.</PText>

                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <Imgsection>
                            <img width="100%" src={BenefitsImg4} />
                        </Imgsection>
                    </Grid>
                </Grid>
        </MainContainer>
    )
}

export default Benefits