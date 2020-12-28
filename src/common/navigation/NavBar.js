import React from 'react';
import {Grid, Tab, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import NavStandardLogo from '../../assets/Unifounder_logo.png';
import {useStyles} from "./navBar.styles";

function NavBar() {
    const classes = useStyles();
    return (
        <Grid container className={classes.navbarSection}>
            <div className={classes.upperSection}>
                <p>Sign up for our 2020 Impact Report</p>
            </div>
            <Grid className={classes.navbar}>
                <Grid className={classes.logo}>
                    <div>
                        <img src={NavStandardLogo} alt="uni logo"/>
                    </div>
                </Grid >
                <Grid className={classes.rightSection}>
                    <Tab className={classes.navItem} component={Link}  
                        to="/" label="Find Co-founder" /> 
                    <Tab className={classes.navItem} component={Link} 
                        to="startUpProfile" label="Find Startups" />
                    <Tab className={classes.navItem} component={Link}  
                        to="/posts" label="See posts" />
                    <Tab className={classes.navItem} component={Link} 
                        style={{borderLeft: '1px solid #cccccc'}}
                        to="/startUpProfile" label="Sign in" />
                    <Tab className={classes.navItem} component={Link}  
                        to="/signup" label="Sign up" />
                    {/* <Grid className={classes.navButtons}>
                        <Button
                            className={classes.buttons}
                            variant="contained"
                            color="default"
                            style={{borderLeft: '1px solid #cccccc'}}
                        >
                            Login
                        </Button>
                        <Button
                            className={classes.buttons}
                            variant="contained"
                            color="default"
                            style={{padding:"2px", marginRight:"25px"}}                    > 
                            Sign Up
                        </Button>
                    </Grid> */}
                </Grid>
            </Grid >
        </Grid >
    )
}

export default NavBar;
