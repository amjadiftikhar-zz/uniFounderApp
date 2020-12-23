import React from 'react';
import { Grid, Typography, Tab } from '@material-ui/core';
import Links from '@material-ui/core/Link';
// import {BrowserRouter as Link } from 'react-router-dom';
import FooterStandardLogo from '../../assets/images/LogoPNG/Logo Colour - Standards.png';
// import footerLeftVector from "../../assets/images/LogoPNG/footerLeftVector.png"
import FacebookIcon from '../../assets/images/socialIcons/facebook-f-brands.svg';
import TwitterIcon from '../../assets/images/socialIcons/twitter-brands.svg';
import LinkedinIcon from '../../assets/images/socialIcons/linkedin-in-brands.svg';
import {useStyles} from "./footer.styles";

function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.homepageFooter}>        
            <Grid className={classes.footerSection} >
                <Grid className={classes.address} >               
                    <div><img  src={FooterStandardLogo} alt="logo"/></div>                
                    <Grid item direction="row" className={classes.socialIcons}>
                        <Typography>
                            Porcelænshaven 26, 2nd floor, 2000 Frederiksberg, Danmark
                        </Typography>
                        <Links href="#">
                            <img  src={TwitterIcon} alt="Twitter" />
                        </Links>
                        <Links href="#">
                            <img  src={FacebookIcon} alt="Facebook"/>
                        </Links>
                        <Links href="#">
                            <img  src={LinkedinIcon} alt="LinkedIn"/> 
                        </Links>
                    </Grid>
                </Grid>
                <Grid item  xs={6} md={2} lg={2} className={classes.linkClass}>
                    <Typography variant="body1" className={classes.linkHeaders} >
                        Company 
                    </Typography>
                    <Links href="/" variant="body2" underline="none">About Us </Links>
                    <Links href="/" variant="body2" underline="none">Careers </Links>
                    <Links href="/" variant="body2" underline="none">Team</Links>
                </Grid>
                <Grid item xs={6} md={2} lg={2} className={classes.linkClass}>
                    <Typography variant="body1" className={classes.linkHeaders}>
                    Quick Links 
                    </Typography>
                    <Links href="/" variant="body2" underline="none">FAQ </Links>
                    <Links href="/" variant="body2" underline="none">Customer Support </Links>
                    <Links href="/" variant="body2" underline="none">Support </Links>
                </Grid>
                <Grid item xs={6} md={2} lg={2} className={classes.linkClass}>
                    <Typography variant="body1" className={classes.linkHeaders}>
                        Partnerships 
                    </Typography>
                    <Links href="/" variant="body2" underline="none">Partners</Links>
                    <Links href="/" variant="body2" underline="none">Sponsership </Links>
                </Grid>
                <Grid item xs={6} md={2} lg={2} className={classes.linkClass}>
                    <Typography variant="body1" className={classes.linkHeaders}>
                        Learn 
                    </Typography>
                    <Links href="/" variant="body2" underline="none">Blog</Links>
                    <Links href="/" variant="body2" underline="none">Events</Links>
                </Grid>
            </Grid> 
            <Grid container className={classes.footerNavigation} alignItems="center">
            {/* <Grid item xs={12} sm={2} >
                <Typography variant="body2">&copy; 2020 UniFounder </Typography>
            </Grid>
            <Grid container xs={12} sm={6}  direction="row" >
                <Tab component={Link} to="/"  label="Terms of Services" />
                <Tab component={Link} to="/"  label="Privacy Policy" />
                <Tab component={Link} to="/"  label="Trust & Safety" />
            </Grid> */}
            </Grid>  
        </Grid>
    )
}

export default Footer

