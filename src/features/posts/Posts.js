import React from 'react';
import {Grid, Typography, Button, Paper, IconButton, InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from "./posts.styles";

export default function Posts() {
    const classes = useStyles();
    return (
        <Grid className={classes.postMainSection}>
            <Grid className={classes.postHeaderSection}>
                <Typography className={classes.postHeader}>
                    Posts
                </Typography>
                <Typography className={classes.postDescription}>
                    Find the most relevant posts published by startups. 
                </Typography>
            </Grid>
            <Paper component="form" className={classes.postSearchSection}>
                <div className={classes.searchWrapper}>
                    <IconButton className={classes.iconButton} aria-label="search">
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
    )
}