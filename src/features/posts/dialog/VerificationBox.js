import React, {useState} from 'react';
import { Dialog, Grid, Typography, Button } 
from "@material-ui/core";
import DialogComponent from "./DialogComponent";
import ConfirmationBox from "./ConfirmationBox";
import {useStyles} from "./styles.dialog";

function VerificationBox(props) {
    const classes = useStyles();
    const {onClose,anyValue, open} = props;

    //onclick closes verification window
    const handleCloseVerification = () => {
        onClose(anyValue)
    }

    //defining state to toggle to dialogComponent
    const [openDialog, setOpenDialog] = useState(false);
    const [value, setValue] = useState('');

    //onclick opens dialog window including form and login options
    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    //onclick closes dialog window including form and login options
    const handleCloseDialog = (value) => {
        setOpenDialog(false);
        setValue(value)
    }

    //defining state to toggle to ConfirmationBox
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [v, setV] = useState('');

    //onclick opens confirmation window asking if one is loggedin
    const handleOpenConfirmation = () => {
        setOpenConfirmation(true)
    }

    //onclick closes confirmation window
    const handleCloseConfirmation = (val) => {
        setOpenConfirmation(false)
        setV(val)
    }

    return (
        <>
            <Dialog className={classes.dialogContainer} 
                onClose={handleCloseVerification} 
                open={open}>
                <Grid className={classes.confirmationHeaderSection}>
                    <Typography className= {classes.signupContent}>
                        Sure you want to apply for the postion as
                    </Typography>
                    <Typography className={classes.dialogHeader}>
                        Technical Program Manager at Adobe?
                    </Typography> 
                    <Typography className={classes.confirmationButtons}>
                        <Button className={classes.declineBtn}
                            onClick={handleCloseVerification}
                        >
                            Decline
                        </Button>
                        <Button className={classes.applyBtn}
                            onClick={handleOpenConfirmation }
                        >
                            Apply
                        </Button>
                        <Button className={classes.notSignedinBtn}
                            onClick={handleOpenDialog }
                        >
                            not Signedin
                        </Button>
                        <DialogComponent openDialog={openDialog} 
                            onClose={handleCloseDialog} />
                        <ConfirmationBox 
                            openConfirmation={openConfirmation} 
                            onClose={handleCloseConfirmation}
                        />
                    </Typography>  
                </Grid> 
            </Dialog> 
        </>
    )
}

export default VerificationBox
