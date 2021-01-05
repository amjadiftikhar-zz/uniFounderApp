import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./specificPosts.styles";

function TeamMember(props) {

    const classes = useStyles();

    return (
        <Grid className={classes.teamMemberContainer}>
            <Typography className={classes.profileTitle}>
                <img className={classes.memberProfileImage} 
                    src={props.memberProfileImage} alt=""
                />
            </Typography>
            <Typography className={classes.profileTitle}>
                <span className={classes.memberTitle}> 
                    {props.memberTitle} 
                </span>
            </Typography>
            <Typography className={classes.profileTitle}>
                <span className={classes.jobTitle}> 
                    {props.jobTitle} 
                </span>
            </Typography>
        </Grid>
    )
}

export default TeamMember
