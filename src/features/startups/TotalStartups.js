import React from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import {useStyles} from "./startups.styles";

export default function TotalStartups(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.totalStartupContainer}>            
            <Typography className={classes.totalStartupTitle}>
                <h1> {props.totalStartups}</h1>               
            </Typography>
            <Typography className={classes.totalStartupPosts}>
                {props.posts}
            </Typography>
            <Typography className={classes.button}>
                <Button>Explore All</Button>
            </Typography>                
        </Grid>
    )
}