import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    navbarSection: {
        width: '100%',
        display: 'flex',
        flexDirection:'column'
    },
    upperSection: {
        padding:'1.8px',
        background:"#0E0E31",
        color: 'white',
        fontSize: '0.6rem'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFFFFF',
        paddingTop: '8px',
        paddingBottom: '8px',
        // textTransform: 'revert',
        '& img': {
            marginLeft: 25,
        },
        '& a': {
            // color: 'black!important',
            // color: 'yellow',
            fontSize: "0.93rem",
        }
    },
    rightSection: {
        display: 'flex',
        width: '42%',
        alignItems: 'center'
    },
    navItem: {
        color: '#242F65',
        textTransform: 'revert',
        minWidth:50,
        "&:hover": {            
            cursor: 'pointer',
        }
    },
    leftBorder: {
        borderLeft: '1px solid #cccccc'
    },
    navButtons: {
        display: 'flex',
    },
    buttons: {
        backgroundColor: "transparent",
        boxShadow: "none",
        fontSize: "0.93rem",
        textTransform: 'revert',
        "&:focus": {
          outline: "none",
        },
        "&:hover": {
          backgroundColor: "transparent",
          outline: "none",
          boxShadow: "none",
        },
      }
}));

