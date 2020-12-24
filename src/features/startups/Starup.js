import React from 'react';
import {Grid, Typography, IconButton} from "@material-ui/core";
import business from "../../assets/images/business.png";
import location from "../../assets/images/location.png";
import fav from "../../assets/images/fav.png";
import {useStyles} from "./startups.styles";

export default function Startup(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.cardContainer}>
            <Grid className={classes.headSection}>
                <Grid className={classes.imageSection}>
                    <img className={classes.startupImage} 
                        src={props.startupImage} alt="startup image"
                    />
                </Grid>
                <Grid className={classes.titleSection}>
                    <Typography className={classes.startupTitle}>
                        {props.startupTitle}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} src={location} alt="location"/>
                        {props.location}
                    </Typography>
                    <Typography className={classes.location}>
                        <img className={classes.locationImage} src={business} alt=""/>
                        {props.businessType}
                    </Typography>
                </Grid>
            </Grid>    
            <Grid >
                <Typography className={classes.description}>
                    <p>Adobe Inc. is an American multinational computer software company. Incorporated in Delaware and headquartered in San Jose...</p>
                </Typography>
            </Grid> 
            <Grid className={classes.postSection}>
                <Typography>
                    <p>Posts</p>
                </Typography>
                <Grid>
                <Typography>
                    <img src={fav} alt="saved icon"/>
                </Typography>
            </Grid>    
            </Grid> 
        </Grid>
    )
}