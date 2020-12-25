import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./users.styles";

export default function Skill(props) {
    const classes = useStyles();
    return (
        <Typography className={classes.skillContainer}>
            {props.skill}
        </Typography>
    )
}