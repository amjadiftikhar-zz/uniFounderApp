import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import business from "../../../assets/images/business.png";
import location from "../../../assets/images/location.png";
import savedProfile from "../../../assets/images/savedProfile.png";
import clockImage from "../../../assets/images/clockImage.png";
import userType from "../../../assets/images/userType.png";
// import fav from "../../../assets/images/fav.png";
import {useStyles} from "./specificPosts.styles";

export default function SuggestedPostCard(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.suggestedPostContainer}>
            <Grid className={classes.suggestedPostCard}>
                <Grid className={classes.imageSection}>
                    <a href="" 
                        className={classes.startupPostLink}>
                        <img className={classes.startupImage} 
                            src={props.startupImage} alt="startup image"
                        />
                    </a>
                </Grid>
                <Grid className={classes.postDetailSection}>
                    <Grid className={classes.titleSection}>
                        <Typography className={classes.suggestedProfileTitle}>
                            <a href="" 
                                className={classes.startupPostLink}>
                                {props.profileTitle}
                            </a>
                        </Typography>
                        <Typography className={classes.startupTitle}>
                            {props.startupTitle}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.suggestedDetailsSection}>
                <Typography className={classes.detailType}>
                    <img className={classes.typeImage} src={business} 
                        alt=""/>
                    {props.businessType}
                </Typography>
                <Typography className={classes.detailType}>
                    <img className={classes.typeImage} src={location} 
                        alt="location"/>
                    {props.location}
                </Typography>
                <Typography className={classes.detailType}>
                    <img className={classes.typeImage} src={clockImage} 
                        alt="location"/>
                    {props.jobCategory}
                </Typography> 
                <Typography className={classes.detailType}>
                    <img className={classes.typeImage} src={userType} 
                        alt="location"/>
                    {props.userType}
                </Typography> 
            </Grid> 
            <Grid className={classes.suggestedSavedSection}>
                <Typography>
                <span className={classes.timeStamp}>{props.timeStamp}</span>
                </Typography>
                <Typography>
                    <img className={classes.savedProfile} src={savedProfile} 
                        alt="saved icon"/>
                </Typography>
            </Grid> 
        </Grid>
    )
}