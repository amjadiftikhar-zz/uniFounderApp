import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./jobs.styles";

export default function Job(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.cardContainer}>
            <Typography className={classes.jobTitle}>
                {props.jobTitle}
            </Typography>
            <img className={classes.designationImage} 
                src={props.designationImage} alt=""
            />
        </Grid>
    )
}