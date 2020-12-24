import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import SearchBar from "../searchBar/SearchBar";
import Ecohotels from "../../assets/images/startups/Ecohotels.png";
import Dropbox from "../../assets/images/startups/Dropbox.png";
import Mimer from "../../assets/images/startups/Mimer.png";
import maria from "../../assets/images/heroUsers/maria.png";
import adam from "../../assets/images/heroUsers/adam.png";
import leo from "../../assets/images/heroUsers/leo.png";
import {useStyles} from "./hero.styles";

export default function HeroComponent() {
    const classes = useStyles();
    return (
    <Grid className={classes.mainContainer}>
        <Grid className={classes.leftContainer}>
            <img style={{width:'6em', height:"8em"}} src={Dropbox} alt=""/>
            <img style={{width:'12em', height:"14em"}} src={Mimer} alt=""/> 
            <img style={{width:'8em', height:"10em"}} src={Ecohotels} alt=""/>
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
              <img style={{width:'12em'}} src={maria} alt=""/>
              <img style={{width:'15em'}} src={adam} alt=""/>
              <img style={{width:'12em'}} src={leo} alt=""/>  
        </Grid>
    </Grid>
    )
}