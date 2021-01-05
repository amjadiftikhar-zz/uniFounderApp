import React from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import business from "../../../assets/images/business.png";
import location from "../../../assets/images/location.png";
import savedProfile from "../../../assets/images/savedProfile.png";
import clockImage from "../../../assets/images/clockImage.png";
import userType from "../../../assets/images/userType.png";
import adobeImage from "../../../assets/images/adobe.png";
import specificStartup from "../../../assets/images/specificStartup.png";
import SepcificPostCard from "./SpecificPostCard";
import {memberObj} from "./team.obj";
import {useStyles} from "./specificPosts.styles";
import TeamMember from './TeamMember';

function SpecificPostDetails() {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.postUpperSection}>
                <Grid className={classes.postUpperLeftSection}>
                    <Grid className={classes.imageSection}>
                        <a className={classes.startupPostTitle}>
                            <img className={classes.startupImage} 
                                src={adobeImage} alt="startup image"
                            />
                        </a>
                    </Grid>
                    <Grid className={classes.postTitleSection}>
                        <Typography className={classes.profileTitle}>
                            <span className={classes.startupPostTitle}>
                                Manager
                            </span>
                        </Typography>
                        <Typography className={classes.startupTitle}>
                                Adobe
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.savedSection}>
                    <Typography>
                        <span className={classes.timeStamp}>
                            3 days ago
                        </span>
                    </Typography>
                    <Typography>
                        <img className={classes.savedProfile} src={savedProfile} 
                            alt="saved icon"/>
                    </Typography>
                </Grid> 
            </Grid>
            <Grid className={classes.detailsSection}>
                <Typography className={classes.detailTypeGroup}>
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
                <Typography className={classes.detailType}>
                    <Button color='primary' variant="contained">Apply</Button>
                </Typography> 
            </Grid>               
            <Grid className={classes.specificPostDescription}>
                <Typography className={classes.postDescription}>
                    <h4 className={classes.sectionTitle}>
                        Job Description
                    </h4>
                    <p>
                        Google builds products that help create opportunities 
                        for everyone, whether they’re down the street or 
                        across the globe.

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
            <Grid className={classes.specificPostDescription}>
                <Typography className={classes.postDescription}>
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
            <Grid className={classes.specificPostDescription}>
                <Typography className={classes.postDescription}>
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
                <Typography className={classes.postDescription}>
                    <h4 className={classes.sectionTitle}>
                        Team Member
                    </h4>
                    <Typography className={classes.teamProfiles}>
                        {memberObj.map((member,index) => {
                            return(
                                <TeamMember
                                    key={index}
                                    memberProfileImage={member.memberProfileImage}
                                    memberTitle={member.memberTitle}
                                    jobTitle={member.jobTitle}
                                />
                            )
                        })}     
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
            <SepcificPostCard/>
        </div>
    )
}

export default SpecificPostDetails
