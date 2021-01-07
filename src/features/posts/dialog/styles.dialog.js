import {makeStyles, withStyles} from "@material-ui/core";
import { Button, IconButton } from '@material-ui/core';

const StyledButton = withStyles({
    // Customizing buttons
    root: {
        background: '#0073B0',
        border: 0,
        height:"40px",
        color: 'white',
        padding: '0 25px',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: "none",
        margin: "5px 0",
        '&:hover': {
            background: '#0073B0',
        },
    },

})(Button);

const StyledIconButton = withStyles({
    // Customizing buttons
    root: {
        color: '#0073B0',        
    },

})(IconButton);

const useStyles = makeStyles(() => ({
    // Confirmation dialog box styles
    confirmationHeaderSection: {
        marginTop: '5em',
        padding: '2em',
    },
    confirmationButtons: {
        marginTop: '3em',
    },
    declineBtn: {
        width:'125px', 
        background:"#F1F4FD", 
        color:'blue', 
        marginRight:'0.8em', 
        textTransform:'none',
        fontFamily: 'poppins',
        fontWeight: 400,
        fontSize: 16,
        fontStyle: 'normal',
    }, 
    applyBtn: {
        width:'125px', 
        background:"#3936C4",
        textTransform: 'none',
        color:'white',
        fontFamily: 'poppins',
        fontWeight: 400,
        fontSize: 16,
        fontStyle: 'normal',
        '&:hover': {
            background: '#0073B0',
        },
    },
    //temporary button for 'not signed in' styles
    notSignedinBtn: {
        width: 100,
        background:"#3936C4",
        textTransform: 'none',
        color:'white',
        fontFamily: 'poppins',
        fontWeight: 400,
        fontSize: 14,
        marginLeft: '0.8em',
        fontStyle: 'normal',
        '&:hover': {
            background: '#0073B0',
        },
    },
    // dialog box styles
    dialogContainer: {
        borderRadius: '20px',
        border: '2px solid black',
    },
    dialogHeaderSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
    },
    dialogHeader: {
        fontFamily: 'Poppins',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '40px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: '#0E0E31',
    },
    signupContent: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '21px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: '#0E0E31',
    },
    //buttons and button section style
    buttonSection: {
        margin: '1em',
        width: '22em',
        display: 'flex',
        flexDirection: 'column',
    },
    smallButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    // Social media Icons styles
    iconClass: {
        width: 16,
        height: 16,
        fontWeight: 300,
        alignSelf: 'center',
        marginRight: '0.8em',
    },
    textFieldStyle: {
        width: '100%',
        height: 30,
        borderRadius: '3px',
        marginBottom: '1.3em',
    },
    // submit button style
    submitBtn: {
        marginTop: '3em',
        width: '100%',
        borderRadius: '5px',
        fontFamily: 'poppins',
        textTransform: 'none',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '21px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
}));

export {useStyles, StyledButton, StyledIconButton}