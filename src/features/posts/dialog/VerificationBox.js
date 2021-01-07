import React, {useState} from 'react';
import { Dialog, Grid, Typography, Button } 
from "@material-ui/core";
import DialogComponent from "./DialogComponent";
import ConfirmationBox from "./ConfirmationBox";
import {useStyles} from "./styles.dialog";

function VerificationBox(props) {
    const classes = useStyles();
    const {onClose,anyValue, open} = props;

    const handleCloseVerification = () => {
        onClose(anyValue)
    }

    //defining state to toggle to dialogComponent
    const [openDialog, setOpenDialog] = useState(false);
    const [value, setValue] = useState('');

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = (value) => {
        setOpenDialog(false);
        setValue(value)
    }

    //defining state to toggle to ConfirmationBox
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [v, setV] = useState('');

    const handleOpenConfirmation = () => {
        setOpenConfirmation(true)
    }
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
