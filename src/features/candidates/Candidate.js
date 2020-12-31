import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./candidates.styles";

export default function Candidate(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.cardContainer}>
            <Typography className={classes.candidateTitle}>
                {props.candidateTitle}
            </Typography>
            <img className={classes.designationImage} 
                src={props.designationImage} alt="designation image"
            />
        </Grid>
    )
}