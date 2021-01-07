import React from 'react';
import {Dialog, Grid, Typography, Button, 
    FormControlLabel,  Checkbox
} 
from "@material-ui/core";
import {
    Formik,
    Form,
    Field
} from 'formik';
import { TextField } from 'formik-material-ui';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import {useStyles, StyledButton} from "./styles.dialog";

function DialogComponent(props) {
    const classes = useStyles();
    const {onClose, value, openDialog} = props;

    const handleCloseDialog = () => {
        onClose(value)
    }    

    return (
        <Dialog className={classes.dialogContainer} 
            onClose={handleCloseDialog} open={openDialog}>
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
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                    >
                        {({ submitForm, isSubmitting }) => (
                        <Form>
                            <Field
                                type="text"
                                component={TextField}
                                id="email"
                                name="email"
                                placeholder="Email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                className={classes.textFieldStyle}
                            />
                            <br />
                            <Field
                                type="password"
                                component={TextField}
                                id="password"
                                name="password"
                                placeholder="Password"
                                fullWidth
                                margin="normal"
                                variant="outlined" 
                                className={classes.textFieldStyle}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Remember me?"
                            />
                            <Button
                                className={classes.submitBtn}
                                variant="contained"
                                color="primary"
                                // disabled={isSubmitting}
                                // onClick={submitForm}
                            >
                                Log In
                            </Button>
                        </Form>
                        )}
                    </Formik>
                </Grid> 
            </Grid>
        </Dialog>
    )
}

export default DialogComponent
