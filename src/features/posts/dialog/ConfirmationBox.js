import React, {useState} from 'react';
import { Dialog, Grid, Typography, Button } 
from "@material-ui/core";
// import DialogComponent from "./DialogComponent";
import {useStyles} from "./styles.dialog";

function ConfirmationBox(props) {
    const classes = useStyles();
    const {onClose,v, openConfirmation} = props;

    const handleCloseConfirmation = () => {
        onClose(v)
    }

    return (
        <>
            <Dialog className={classes.dialogContainer} 
                onClose={handleCloseConfirmation} 
                open={openConfirmation}>
                <Grid className={classes.confirmationHeaderSection}>
                    <Typography className= {classes.signupContent}>
                        Sure you want to apply for the postion as
                    </Typography>
                    <Typography className={classes.dialogHeader}>
                        Technical Program Manager at Adobe?
                    </Typography> 
                    <Typography className={classes.confirmationButtons}>
                        <Button className={classes.applyBtn}
                            onClick={handleCloseConfirmation}
                        >
                            Close
                        </Button> 
                    </Typography>  
                </Grid> 
            </Dialog> 
        </>
    )
}

export default ConfirmationBox
