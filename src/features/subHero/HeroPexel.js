import React from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import heroPexel from "../../assets/images/pexels.png";
import {useStyles} from "./heroPexels.styles";

export default function HeroPexel() {
    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer}>
            <Typography className={classes.pexelImageSection}>
                <img className={classes.pexelImage} 
                src={heroPexel} alt="pexel image"
            />
            </Typography>
            <Typography className={classes.detailSection}>
                <h1>Join thousands of people and projects on UniFounder</h1>
                <Button className={classes.button}>Start Connecting- it's free</Button>
            </Typography>
        </Grid>
    )
}