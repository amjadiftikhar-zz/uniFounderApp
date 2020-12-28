import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    postMainSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '263px',
        background: '#3936C4',
    },
    postHeaderSection: {
        width: '500px',
        textAlign: 'left',
        marginLeft: '2em',
        padding:'1em',
        color: 'white'
    },
    postHeader: {
        fontWeight: 600,
        fontSize: '30px',
        fontStyle: 'normal'
    },
    postDescription: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '26px'
    },
    postSearchSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '500px',
        height: '45px',
        borderRadius: '10px',
      },
      input: {
        fontSize: 16,
      },
      iconButton: {
        // padding: 1,      
      },
      btnWrapper:{
      },
      button: {
        fontStyle: 'normal',        
        backgroundColor:"#3936C4",
        textTransform: 'revert',
        fontSize: '16px',
        fontFamily: 'poppins',
        color:"white",
        borderRadius: '5px',
        marginRight: '8px'
      },
}));

