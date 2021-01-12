import React, {useState} from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import location from "../../../assets/images/location.png";
import business from "../../../assets/images/business.png";
// import Posts from '../Posts';
import StartupCard from "../../startups/startupPage/StartupCard";
// import {startupsObj} from "../../startups/startup.obj/";
import {startupsObj} from "../startup.obj"
import SpecificStartupDetails from './SpecificStartupDetails';
import {useStyles} from "./styles.specificStartup";

export default function SpecificStartup() {
    const classes = useStyles();    

    const [toggleToStartups, setToggleToStartups] = useState(0)

    return (
        <>
        {/* {toggleToPosts ? <Posts/> :  */}
        <Grid className={classes.specificStartupPostContainer}>
            {/* <Grid className={classes.specificDetailSection}> */}
                <SpecificStartupDetails/>
            {/* </Grid> */}
            <Grid className={classes.relevantStartupSection}>
                <h4>Suggested Startups</h4>
                <Grid className={classes.suggestedStartupCard}>
                {startupsObj.map((startup, index) => {
                    return(
                        <StartupCard
                            key = {index}
                            startupImage = {startup.startupImage}
                            profileTitle = {startup.profileTitle}
                            startupTitle = {startup.startupTitle}
                            businessType = {startup.businessType}
                            location = {startup.location}
                            clockImage = {startup.clockImage}
                            timeStamp = {startup.timeStamp}
                            jobCategory = {startup.jobCategory}
                            userType = {startup.userType}
                            description={startup.description}
                        />
                    )
                })}
                </Grid>
                <Grid className={classes.borderSection}>
                </Grid>
                <Grid className={classes.suggestedQuerySection}>
                    <Grid className={classes.suggestedQueryTitle}>
                        Looking for startups to join?
                    </Grid>
                    <Grid className={classes.suggestedPostContainer}>
                        <Typography className={classes.suggestedInfoSection}>
                            <Typography className={classes.suggestedQueryInfo}>
                                <img className={classes.typeImage} src={business} alt=""/> 
                                What industry are you seeking??
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
                <Grid className={classes.expandAll}>
                <a href="" >
                    See all Startups
                </a>
                    <ChevronRight className={classes.chevron}/> 
                </Grid>
            </Grid>
        </Grid>
        {/* } */}
        </>
    )
}