import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
// import business from "../../assets/images/business.png";
// import location from "../../assets/images/location.png";
// import savedProfile from "../../assets/images/savedProfile.png";
// import clockImage from "../../assets/images/clockImage.png";
// import userType from "../../assets/images/userType.png";
import {useStyles} from "./posts.styles";
import Posts from './Posts';
import Startup from "../startups/Starup"
import {startupsObj} from "../startups/startup.obj"

export default function SpecificPost() {
    const classes = useStyles();    

    const [toggleToPosts, setToggleToPosts] = useState(0)

    return (
        <>
        {toggleToPosts ? <Posts/> : 
        <Grid className={classes.specificPostContainer}>
            <Grid className={classes.specificDetailSection}>
                post details
            </Grid>
            <Grid className={classes.relevantPostSection}>
                {startupsObj.map(startupPost => {
                    return(
                        <Startup
                            startupTitle={startupPost.startupTitle}
                            startupImage={startupPost.startupImage}
                            location={startupPost.location}
                            businessType={startupPost.businessType}
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