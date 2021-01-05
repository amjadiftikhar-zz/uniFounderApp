import React, {useState} from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import location from "../../../assets/images/location.png";
import business from "../../../assets/images/business.png";
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
                <Grid className={classes.borderSection}>
                </Grid>
                <Grid className={classes.suggestedQuerySection}>
                    <Grid className={classes.suggestedQueryTitle}>
                        Searching for startup posts?
                    </Grid>
                    <Grid className={classes.suggestedPostContainer}>
                        <Typography className={classes.suggestedInfoSection}>
                            <Typography className={classes.suggestedQueryInfo}>
                                <img className={classes.typeImage} src={business} alt=""/> 
                                What industry are you seeking?
                            </Typography>
                            <Typography className={classes.suggestedQueryInfo}>
                                <img className={classes.typeImage} src={location} alt=""/> Location?
                            </Typography>
                        </Typography>
                        <Button className={classes.searchBtn} color='primary' 
                            variant="contained">
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <a href="">backToAllPosts</a>
            </Grid>
        </Grid>
        }
        </>
    )
}