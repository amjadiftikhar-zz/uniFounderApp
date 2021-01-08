import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import business from "../../../assets/images/business.png";
import location from "../../../assets/images/location.png";
import fav from "../../../assets/images/fav.png";
import {useStyles} from "./startupsPage.styles";
import createTypography from '@material-ui/core/styles/createTypography';

export default function Startup(props) {

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
                    <img src={fav} alt="saved icon"/>
                </Typography>
            </Grid>    
            <Grid className={classes.descriptionSection}>
                <Typography className={classes.description}>
                    <p>{props.description}</p>
                </Typography>
            </Grid> 
            <Grid className={classes.profileSection}>
                <Typography>
                    <p>Posts</p>
                </Typography>
            </Grid>    
        </Grid>
    )
}