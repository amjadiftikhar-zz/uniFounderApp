import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Startup from "./Starup";
import TotalStartups from "./TotalStartups";
import {useStyles} from "./startups.styles";
import {startupsObj} from "./startup.obj"

function StartupList() {
    const classes = useStyles();
    return (
        <Grid className={classes.startupSection}>
            <Grid className={classes.startupHeader}>
                <Typography className={classes.startupDescription}>
                    <h2>Find a startup</h2>
                    <p style = {{fontSize:'16px'}}>
                        Browse through  1000+ startups and find an exciting project to join
                    </p>
                </Typography>
            </Grid> 
            <Grid className={classes.exploreSection}>
                <Typography className={classes.exploreAll}>
                   <a href="">Explore All</a> <ChevronRight className={classes.chevron}/>
                </Typography>
                <Typography className={classes.exploreAll}>
                    Industory: <a href="">Internet & Technology</a> <ExpandMore/>                  
                </Typography>
            </Grid> 
            <Grid className={classes.startupCardSection}>
            {
                startupsObj.map(s => {
                    return(
                        <Startup 
                            startupTitle={s.startupTitle}
                            startupImage={s.startupImage}
                            location={s.location}
                            businessType={s.businessType}
                            description={s.description}
                        />
                    )
                })
            }
            <TotalStartups 
                totalStartups="+148"
                posts="Startup Posts" 
            />
            </Grid>             
        </Grid>
    )
}

export default StartupList
