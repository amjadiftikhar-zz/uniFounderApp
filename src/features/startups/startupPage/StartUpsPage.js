import React, {useState} from 'react';
import {Grid, Typography, Tab, Button, Paper, IconButton, InputBase} 
from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {startupsObj} from "../startup.obj";
import {useStyles} from "./startupsPage.styles";
import StartupCard from './StartupCard';
import StartUpstCategory from './StartUpsCategory';
import SpecificStartup from '../specificStartup/SpecificStartup';

export default function StartUpsPage({toggleToStartup}) {

    const classes = useStyles();

    const [toggleToSpecificstartup, setToggleToSpecificstartup] = useState(false)

    function toggleToStartup(e){
        e.preventDefault()
        setToggleToSpecificstartup(toggleToSpecificstartup => !toggleToSpecificstartup)
    }
    
    return (
        <>
        { toggleToSpecificstartup ? <SpecificStartup/> : 
        <Grid className={classes.startupMainSection}>
            <Grid className={classes.inviteSection}>
                <span className={classes.inviteDescription}> 
                Boost your profile visibility by inviting your friends 
                to Unifounder!</span>
                <button className={classes.inviteBtn}>Invite</button>
            </Grid>
            <Grid className={classes.startupSearchSection}>
                <Grid className={classes.startupHeaderSection}>
                    <Typography className={classes.startupHeader}>
                        Startups
                    </Typography>
                    <Typography className={classes.startupDescription}>
                        Here you can browse through more than 1000 startups 
                    </Typography>
                </Grid>
                <Paper component="form" className={classes.startupSearch}>
                    <div className={classes.searchWrapper}>
                        <IconButton className={classes.iconButton} 
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search by title or keyword"
                        />
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}                
                        >
                        Search
                        </Button>
                    </div>
                </Paper>
            </Grid>
            <Grid className={classes.startupBodySection}>
                <Grid className={classes.startupCategorytSection}>
                    <StartUpstCategory/>
                </Grid>
                <Grid className={classes.startupRightSection}>
                    <Grid className={classes.tabSection}>
                        <span className={classes.tabElement}>
                            Showing 600 filtered startups</span>
                        <span className={classes.tabElement}>
                            Seeking a co-founder?
                            <a className={classes.tabLinks} href="">
                                Create Your Own startup!</a>
                        </span>
                        <span className={`${classes.tabElement}, 
                            ${classes.tabElementExpand}`}>Sort By,
                            <a className={classes.tabLinks} href="">
                                Most Recent
                            </a>
                            <ExpandMoreIcon/>
                        </span>
                    </Grid>
                    <Grid className={classes.startupListSection}>
                        {startupsObj.map((startup, index) => {
                            return(
                                <StartupCard
                                    toggleToStartup = {toggleToStartup}
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
                    <Grid className={classes.expandStartups}>
                        <ExpandMoreIcon/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        } 
        </>
    )
}