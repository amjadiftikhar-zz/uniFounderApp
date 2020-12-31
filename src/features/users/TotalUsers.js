import React from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import {useStyles} from "./users.styles";

export default function TotalUsers(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.totalUserCard}>            
            <Typography className={classes.totalUserTitle}>
                <h1> {props.totalUsers}</h1>               
            </Typography>
            <Typography className={classes.totalUserProfiles}>
                {props.Profiles}
            </Typography>
            <Typography className={classes.button}>
                <Button>Explore All</Button>
            </Typography>                
        </Grid>
    )
}