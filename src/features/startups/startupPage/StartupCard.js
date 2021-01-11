import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import business from "../../../assets/images/business.png";
import location from "../../../assets/images/location.png";
import profileImage from "../../../assets/images/john.png";
import savedProfile from "../../../assets/images/savedProfile.png";
import {useStyles} from "./startupsPage.styles";

export default function StartupCard(props) {

    const classes = useStyles();

    return (
        <Grid className={classes.startupCardContainer}>
            <Grid className={classes.headSection}>
                <Grid className={classes.imageSection}>
                    <Typography className={classes.imageContainer}>
                        <img className={classes.startupImage} 
                            src={props.startupImage} alt="startup image"
                        />
                    </Typography>
                    <Typography className={classes.startupTitle}>
                        {props.startupTitle}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} 
                            src={location} alt="location"
                        />
                        {props.location}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} 
                            src={business} alt=""
                        />
                        {props.businessType}
                    </Typography>
                </Grid>
                <Typography>
                    <img className={classes.savedProfile} src={savedProfile} alt="unsaved icon"/>
                </Typography>
            </Grid>    
            <Grid className={classes.descriptionSection}>
                <Typography className={classes.description}>
                    <p>{props.description}</p>
                </Typography>
            </Grid> 
            <Grid className={classes.profilePostSection}>
                <Typography className={classes.profileInfo}>
                    <img className={classes.profileImage} src={profileImage} alt=""/>
                    <div className={classes.profileDetails}>
                        <span className={classes.profTitle}>John Doe</span>
                        <span className={classes.profDesignation}>Owner</span>
                    </div>
                </Typography>
                <Typography className={classes.totalPosts}>
                    <div className={classes.totalPost}>10</div>
                    <div className={classes.post}>Posts</div>
                </Typography>
            </Grid>    
        </Grid>
    )
}