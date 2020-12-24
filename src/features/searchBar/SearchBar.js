import React from 'react';
import {useStyles} from "./searchBar.styles";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import {Grid, Button, Paper, IconButton, InputBase, Divider} 
    from '@material-ui/core';

function SearchBar() {
    const classes = useStyles();
    return (
        <> <Grid className={classes.buttonContainer}>
                <Button
                    variant="contained" 
                    className={classes.buttons}
                    >
                    CO-FOUNDERS
                </Button>
                <Button
                    variant="contained"
                    className={classes.buttons}
                >
                    START-UPS
                </Button>
            </Grid>
        <Paper component="form" className={classes.root}>
            <div className={classes.searchWrapper}>
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="What skills are you seeking?"
                />
            </div>
            <Divider className={classes.divider} />
            <div className={classes.locationWrapper}>
                <IconButton className={classes.iconButton} aria-label="directions">
                    <LocationOnOutlinedIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="City"
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
    </>
    )
}

export default SearchBar;
