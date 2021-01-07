import {makeStyles, withStyles} from "@material-ui/core";
// import { withStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

const StyledButton = withStyles({
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
    root: {
        // background: 'white',
        // border: 0,
        // height:"40px",
        color: '#0073B0',
        // padding: '0 25px',
        // fontSize: 16,
        // fontWeight: 500,
        // textTransform: "none",
        // margin: "5px 0",
        
    },

})(IconButton);

const useStyles = makeStyles(() => ({
    dialogContainer: {
        // padding: '5em',
        // width: '20em',
        // height: '20em',
    },
    dialogHeaderSection: {
        // border: '2px solid red',
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
        // border: '2px solid black',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '21px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: '#0E0E31',
    },
    buttonSection: {
        // border: '2px solid yellow',
        margin: '1em',
        width: '22em',
        display: 'flex',
        flexDirection: 'column',
    },
    smallButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    iconClass: {
        width: 16,
        height: 16,
        fontWeight: 300,
        alignSelf: 'center',
        marginRight: '0.8em',
    },
    // socialButtons: {
    //     display: 'flex',
    //     border: '2px solid black',
    //     alignItems: 'center',

    // }
}));

export {useStyles, StyledButton, StyledIconButton}