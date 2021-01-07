import React from 'react';
import {Dialog, Grid, Typography, IconButton} from "@material-ui/core";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';


// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
// import GmailIcon from "@material-ui/icons/Gmail";

import linkedin from "../../../assets/images/linkedin1.png";
import facebook from "../../../assets/images/facebook.png";
import {useStyles, StyledButton} from "./styles.dialog";

function DialogComponent(props) {
    const classes = useStyles();
    const {onClose,anyValue, open} = props;

    const handleClose = () => {
        onClose(anyValue)
    }

    return (
        <Dialog className={classes.dialogContainer} 
            onClose={handleClose} open={open}>
            <Grid className={classes.dialogHeaderSection}>
                <Grid className={classes.textSection}>
                    <Typography className= {classes.dialogHeader}>
                        Let the startup know who are you?
                    </Typography>
                    <Typography className={classes.signupContent}>
                        Do not have an account? 
                        <a href="">Signup</a>
                    </Typography>           
                </Grid>
                <Grid className={classes.buttonSection}>                    
                    <StyledButton style={{width:'100%'}} >
                        <FaLinkedinIn className={classes.iconClass}/>
                        Log in with LinkedIn 
                    </StyledButton>                    
                    <Typography className={classes.smallButtons}>
                        <StyledButton style={{width:'48%', background:"#EB4336"}}>
                            <FaGoogle className={classes.iconClass} /> 
                            Gmail
                        </StyledButton>
                        <StyledButton style={{width:'48%', background:"#3B579C"}}>
                            <FaFacebookF className={classes.iconClass} /> 
                            Facebook
                        </StyledButton>
                    </Typography>
                   
                </Grid> 
            </Grid>
            <Grid className={classes.dialogHeaderSection}>
                Form here
            </Grid>
        </Dialog>
    )
}

export default DialogComponent
