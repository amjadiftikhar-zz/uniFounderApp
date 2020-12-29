import {makeStyles, Checkbox} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export const CustomCheckbox = withStyles({
    root: {
    //   background: "white",
    //   borderRadius: 3,
    //   border: 0,
      // color: COLORS.orange,
    //   height: 38,
    //   padding: '0 10px',
    //   fontWeight: "bold",
      textTransform: "none",
    //   margin: "20px 0",
      '&:checkbox': {
        background: "blue",
        color: "#fff"
      },
    },
  })(Checkbox); 

export const useStyles = makeStyles(() => ({
    // main post section/page
    postMainSection: {
        background: '#F2F2F2'
    },
    postSearchSection: {
        width: '100%',
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
    postSearch: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '500px',
        height: '40px',
        borderRadius: '10px',
    },
    input: {
        fontSize: 16,
    },
    button: {
        fontStyle: 'normal',        
        backgroundColor:"#3936C4",
        textTransform: 'revert',
        fontSize: '14px',
        fontFamily: 'poppins',
        color:"white",
        borderRadius: '5px',
        marginRight: '8px'
    },
    postBodySection: {
        // border: '2px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '2em 4em 2em 4em'
    },
    postCategorytSection: {
        // border: '2px solid yellow',
        width: '30%'
    },
    typeOfBusiness: {
        // border: '2px solid blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '0.5em'
    },
    categoryTitle: {
        marginLeft: 10,
        fontSize: 20,
        color: '#242F65',
        fontWeight: 600,
        marginBottom: '0.3em'
    },
    element: {
        fontSize: 14,
        color: '#242F65',
        fontWeight: 400
    },
    checkbox: {
        // MuiCheckbox: {
        //     colorSecondary: {
        //       color: 'white!important'
        //     },
        //     checked: {
        //       color: 'blue!important'
        //     }
        //   }
    },
    //   section to display posts
    postListSection: {
    //   border: '2px solid yellow',
      width: '68%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    //   post card container 
    postCardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1em',
      height: 130,
      borderRadius: '10px',
      background: 'white',
      marginBottom: '1em'
    },
    // image section in the card
    imageSection: {
      width: 85,
      height: 85,
    },
    startupImage: {
      width: '100%',
      height: '100%'
    },
    // detail section in the card
    postDetailSection: {
      color: '#0E0E31',
      width: '70%',
    //   border: '2px solid black',
      padding: '0.5em',
      display: 'flex',
      flexDirection: 'column',
    },
    titleSection: {
      borderBottom: '1px solid #EAEAEA'
    },
    profileTitle: {
      width: '100%',
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 500,
    },
    startupTitle: {
        width: '100%',
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 400,
        paddingBottom: '0.5em'
    },
    detailsSection: {
        paddingTop: '0.8em',
        display: 'flex',
    },
    typeImage: {
       width: 11,
       height: 12,
       color: '#B3B1B7',
       marginRight: 3,
    },
    detailType: {
        fontSize: 14,
        marginRight: 10,
    },
    // saved profile section in the card
    savedSection: {
        // border: '2px solid red',
        height: 85,
        color: '#AFB3B9',
    },
    timeStamp: {
        fontSize: 14,
        fontWeight: 400, 
    },
    savedProfile: {
        width: 15,
        marginTop: "0.4em",
        cursor: 'pointer'
    }
}));

