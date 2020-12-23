import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import mPartner from "../../assets/images/partners/mPartner.png";
import cbs from "../../assets/images/partners/cbs.png";
import cse from "../../assets/images/partners/cse.png";
import techPartner from "../../assets/images/partners/techPartner.png";
import {useStyles} from "./partners.styles";

function Partners() {
    const classes = useStyles();
    return (
        <Grid className={classes.partnersSection}>
            <Typography>
                 <span>Partnering with</span>
            </Typography> 
            <Typography >
                 <img className={classes.companyLogo} src={mPartner} alt=""/>
            </Typography> 
            <Typography >
                 <img className={classes.companyLogo} src={cbs} alt=""/>
            </Typography >    
            <Typography >
                 <img className={classes.companyLogo} src={cse} alt=""/>
            </Typography>    
            <Typography >
                 <img className={classes.companyLogo} src={techPartner} alt=""/>
            </Typography>              
        </Grid>
    )
}

export default Partners
