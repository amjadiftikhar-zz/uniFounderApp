import React, {useState} from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import business from "../../../assets/images/business.png";
import location from "../../../assets/images/location.png";
import savedProfile from "../../../assets/images/savedProfile.png";
import clockImage from "../../../assets/images/clockImage.png";
import userType from "../../../assets/images/userType.png";
import adobeImage from "../../../assets/images/adobe.png";
import startupBanner from "../../../assets/images/startupBanner.png";
import specificStartup from "../../../assets/images/specificStartup.png";
import businessType from "../../../assets/images/business.png";
// import SepcificPostCard from "./SpecificPostCard";
// import {memberObj} from "./team.obj";
import {useStyles} from "./styles.specificStartup";
// import TeamMember from './TeamMember';
// import VerificationBox from '../dialog/VerificationBox';

function SpecificStartupDetails() {

    const classes = useStyles();

    return (
        <Grid className={classes.specificStartupMainSection}>
            <Grid className={classes.startupBannerSection}>
                <img className={classes.startupBanner} 
                    src={startupBanner} alt="startup image"
                />
            </Grid>
            <Grid className={classes.startupCardSection}>
                {/* <Grid className={classes.startupUpperLeftSection}> */}
                <Grid className={classes.imageSection}>
                    <a className={classes.startupTitle}>
                        <img className={classes.startupImage} 
                            src={adobeImage} alt="startup image"
                        />
                    </a>
                </Grid>
                <Grid className={classes.startupTitleSection}>
                    <Typography className={classes.profileTitle}>
                        <span className={classes.startupPostTitle}>
                            Adobe
                        </span>
                    </Typography>
                    <Grid className={classes.detailsContainer}>
                        <Grid className={classes.startupDetails}>
                            <Typography className={classes.detailTypeSection}>
                                <Typography className={classes.detailType}>
                                <img className={classes.typeImage} src={business} 
                                    alt=""/>
                                    Tech
                                </Typography>
                                <Typography className={classes.detailType}>
                                    <img className={classes.typeImage} src={location} 
                                        alt="location"/>
                                        Stockholm, SE
                                </Typography>
                            </Typography>
                            <Typography className={classes.detailTypeSection}>
                                <Typography className={classes.detailType}>
                                    <img className={classes.typeImage} src={clockImage} 
                                        alt="location"/>
                                        Full time
                                </Typography> 
                                <Typography className={classes.detailType}>
                                    <img className={classes.typeImage} src={userType} 
                                        alt="location"/>
                                        partner
                                </Typography>  
                            </Typography> 
                        </Grid>
                        <Grid className={classes.savedSection}>
                            <Typography>
                                <img className={classes.savedProfile} src={savedProfile} 
                                    alt="saved icon"/>
                            </Typography>
                            <Typography className={classes.detailType}>
                                <Button color='primary' variant="contained" 
                                    className={classes.contactBtn}
                                    // onClick={clickToOpenVerification}
                                >
                                    Get in touch
                                </Button>
                                {/* <VerificationBox anyValue={anyValue} 
                                    open={open} 
                                    onClose={handleCloseVerification} /> */}
                            </Typography> 
                        </Grid> 
                    </Grid>
                </Grid>   
            </Grid>
            <Grid className={classes.detailsSection}>                
            </Grid>  
            <Grid className={classes.specificStartupDescription}>
                <Typography className={classes.startupDescription}>
                    <h4 className={classes.sectionTitle}>
                        Company Description
                    </h4>
                    <p>
                    Adobe is the global leader in digital media and digital marketing solutions. 
                    Our creative, marketing and document solutions empower everyone – from emerging 
                    artists to global brands – to bring digital creations to life and deliver immersive, 
                    compelling experiences to the right person at the right moment for the best results. 
                    In short, Adobe is everywhere, and we’re changing the world through digital 
                    experiences.
                    Mission: Adobe is changing the world through digital ex periences.

                    </p> 
                    <p>
                        As a Technical Program Manager for mobile software 
                        engineering, you’ll manage the development of products 
                        that get our users the information they need, no matter 
                        where they are — including phones, tablets, TVs, wearable 
                        devices, cars, and the Internet of Things. In this role, 
                        you’ll plan requirements, identify risks, manage schedules, 
                        and communicate clearly with project stakeholders. 
                    </p>                      
                </Typography> 
            </Grid>
            <Grid className={classes.specificStartupDescription}>
                <Typography className={classes.startupDescription}>
                    <h4 className={classes.sectionTitle}>
                        Key Responsibilities
                    </h4>
                    <ul>
                        <li>Creating Banners</li>
                        <li>Working with a creative Brief that will involve spacial thinking</li>
                        <li>Creating a 3d-like visualisation, not necesary to use 3d program, photoshop and illustrator is more than sufficient.</li>
                        <li> Designing a spatial/graphic representation of a physical boutique.</li>
                    </ul>                      
                </Typography> 
            </Grid>
            <Grid className={classes.specificStartupDescription}>
                <Typography className={classes.startupDescription}>
                    <h4 className={classes.sectionTitle}>
                        Requirements
                    </h4>
                    <ul>                        
                        <li>Creating Banners</li>
                        <li>Working with a creative Brief that will involve spacial thinking</li>
                        <li>Creating a 3d-like visualisation, not necesary to use 3d program, photoshop and illustrator is more than sufficient.</li>
                        <li> Designing a spatial/graphic representation of a physical boutique.</li>
                    </ul>                     
                </Typography> 
            </Grid>
            <Grid className={classes.teamMemberSection}>
                <Typography className={classes.startupDescription}>
                    <h4 className={classes.sectionTitle}>
                        Team Member
                    </h4>
                    <Typography className={classes.teamProfiles}>
                        {/* {memberObj.map((member,index) => {
                            return(
                                <TeamMember
                                    key={index}
                                    memberProfileImage={member.memberProfileImage}
                                    memberTitle={member.memberTitle}
                                    jobTitle={member.jobTitle}
                                />
                            )
                        })}      */}
                    </Typography>               
                </Typography> 
            </Grid>
            <Grid className={classes.startupDescriptionSection}>
                <Typography className={classes.startupDetailSection}>
                    <h4 className={classes.aboutTitle}>
                        About Startup
                    </h4>
                    <Typography className={classes.startupDetails}>
                        Google builds products that help create opportunities for everyone, whether 
                        they’re down the street or across the globe.
                        As a Technical Program Manager for mobile software engineering, 
                        you’ll manage the development of products that get our 
                        users the information they need, no matter where they are — 
                        including phones, tablets, TVs, wearable devices, cars, and 
                        the Internet of Things. In this role, you’ll plan requirements, 
                        identify risks, manage schedules, and communicate clearly with 
                        project stakeholders.    
                    </Typography>                         
                </Typography>  
                <Typography className={classes.specificStartupImageSection}>
                    <img className={classes.specificStartupImage} 
                        src={specificStartup} alt=""/> 
                    <Button color='primary' variant="contained" >View Startup</Button> 
                </Typography> 
            </Grid>
            {/* <SepcificPostCard/> */}
        </Grid>
    )
}

export default SpecificStartupDetails
