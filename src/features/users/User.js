import React from 'react';
import {Grid, Typography, IconButton} from "@material-ui/core";
import business from "../../assets/images/business.png";
import location from "../../assets/images/location.png";
import fav from "../../assets/images/fav.png";
import Skill from "./Skill";
import {useStyles} from "./users.styles";

const skillsObj = ['App Development', 'HTML & CSS', 'Javascript']

export default function User(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.userCardContainer}>
            <Grid className={classes.headSection}>
                <Grid className={classes.imageSection}>
                    <img className={classes.profileImage} 
                        src={props.profileImage} alt="profile image"
                    />
                </Grid>
                <Grid className={classes.titleSection}>
                    <Typography className={classes.userProfileTitle}>
                        {props.userProfileTitle}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} src={location} alt="location"/>
                        {props.location}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} src={business} alt="profession image"/>
                        {props.professionType}
                    </Typography>
                </Grid>
                <Grid className={classes.imageSection}>
                    <img className={classes.unsavedProfile}
                        src={fav} alt="unsave icon"/>
                </Grid>
            </Grid>    
            <Grid >
                <Typography className={classes.description}>
                    <p className={classes.description}>Skills</p>
                </Typography>
            </Grid> 
            <Grid className={classes.skillSection}>
                {skillsObj.map(s => {
                    return(
                    <Skill skill={s}/>
                    )
                })}
            </Grid> 
        </Grid>
    )
}