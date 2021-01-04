import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Posts from '../Posts';
import SuggestedPostCard from "./SuggestedPostCard"
import {postsObj} from "../posts.obj";
import SpecificPostDetails from './SpecificPostDetails';
import {useStyles} from "./specificPosts.styles";

export default function SpecificPost() {
    const classes = useStyles();    

    const [toggleToPosts, setToggleToPosts] = useState(0)

    return (
        <>
        {toggleToPosts ? <Posts/> : 
        <Grid className={classes.specificPostContainer}>
            <Grid className={classes.specificDetailSection}>
                <SpecificPostDetails/>
            </Grid>
            <Grid className={classes.relevantPostSection}>
                <h4>Suggested Posts</h4>
                {postsObj.map(startupPost => {
                    return(
                        <SuggestedPostCard
                            profileTitle={startupPost.profileTitle}
                            startupTitle={startupPost.startupTitle}
                            startupImage={startupPost.startupImage}
                            location={startupPost.location}
                            businessType={startupPost.businessType}
                            timeStamp={startupPost.timeStamp}
                        />
                    )
                })}
                <a href="">backToAllPosts</a>
            </Grid>
        </Grid>
        }
        </>
    )
}