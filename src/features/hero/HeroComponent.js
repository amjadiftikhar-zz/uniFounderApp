import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import SearchBar from "../searchBar/SearchBar";
import {useStyles} from "./hero.styles";

export default function HeroComponent() {
    const classes = useStyles();
    return (
    <Grid className={classes.mainContainer}>
        <Grid className={classes.leftContainer}>
            <Typography variant="h2" className={classes.title}>
               Trial Section
            </Typography>
        </Grid>
        <Grid className={classes.middleContainer}>
            <Grid className={classes.contentWrapper}>
                <Typography variant="p" className={classes.title}>
                    Find the perfect startup or person to start one with
                </Typography>
            </Grid>
            <Grid className={classes.searchContainer}>
                <Grid className={classes.searchField}>
                    <SearchBar title="Search" />
                </Grid>
                <Grid className={classes.trendingContainer}>
                    <Grid className={classes.trendingTitle} >
                        <Typography variant="h6">Trending Searches</Typography>
                    </Grid>
                    <Grid className={classes.linkContainer}>
                        <Link className={classes.linkItem}>App Development</Link>
                        <Link className={classes.linkItem}>Programming</Link>
                        <Link className={classes.linkItem}>Creative Desing</Link>
                        <Link className={classes.linkItem}>Supply Chain </Link>
                        <Link className={classes.linkItem}>Marketing</Link>
                        <Link className={classes.linkItem}>Sales</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className={classes.rightContainer}>
            <Typography variant="h2" className={classes.title}>
               Trial Section
            </Typography>
        </Grid>
    </Grid>
    )
}