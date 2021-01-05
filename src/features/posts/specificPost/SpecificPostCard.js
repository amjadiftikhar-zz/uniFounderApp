import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./specificPosts.styles";
import PostCard from "../PostCard";
import {postsObj} from "../posts.obj";

export default function SepcificPostCard() {
    
    const classes = useStyles();

    return (
        <Grid className={classes.otherStartupSection}>
            <Typography className={classes.postDescription}>
                <h4 className={classes.sectionTitle}>
                    Other Startups
                </h4>
                {postsObj.map((otherStartups, index) => {
                    return(
                        <PostCard
                            key = {index}
                            startupImage = {otherStartups.startupImage}
                            profileTitle = {otherStartups.profileTitle}
                            startupTitle = {otherStartups.startupTitle}
                            businessType = {otherStartups.businessType}
                            location = {otherStartups.location}
                            clockImage = {otherStartups.clockImage}
                            timeStamp = {otherStartups.timeStamp}
                            jobCategory = {otherStartups.jobCategory}
                            userType = {otherStartups.userType}
                        />
                    )
                })}
            </Typography>
        </Grid>
    )
}