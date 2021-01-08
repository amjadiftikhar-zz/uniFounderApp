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

export const useStyles = makeStyles((theme) => ({
  // main startup section/page to display all startups
  startupMainSection: {
    background: '#F2F2F2',
    position: 'relative',
  },
  startupSearchSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '263px',
    background: '#3936C4',
  },
  startupHeaderSection: {
    width: '500px',
    textAlign: 'left',
    marginLeft: '2em',
    padding:'1em',
    color: 'white'
  },
  startupHeader: {
    fontWeight: 600,
    fontSize: '30px',
    fontStyle: 'normal'
  },
  //startup description head section
  startupDescription: {
    // border: '2px solid red',
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    // fontSize: '14px',
    // lineHeight: '26px'
  },
  startupSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '500px',
    height: '48px',
    borderRadius: '8px',
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
  //option to share with others section style
  inviteSection: {
    position: 'absolute',
    width: '15em',    
    marginLeft: '4em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#F1F4FD',
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '0.5em',
    marginTop: '9em',
  },
  inviteDescription: {
    width: '13em',
    fontSize: 14,
    fontWeight: 500
  },
  inviteBtn: {
    width: 175,
    height: 43,
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    Background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(57, 54, 196, 0.6)',
    marginTop: 10,
    marginBottom: 10,
    border: 'none',
    color: '#3936C4',
  },
  //startup body main section
  startupBodySection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '2em 4em 2em 4em'
  },
  //search for a city section style
  citySearchWrapper: {
    // border: '2px solid #E5E4EB',
    // height: 45,
    // marginTop: '1em',
  },
  //styles for the tab elements in the right section
  tabElement: {
    // border:'2px solid red',
    fontSize: 12,
    fontWeight: 500,
  },
  tabLinks: {
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 500,
    marginLeft: '0.5em',
  },
  tabElementExpand: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 500,
  },
  input: {
    // width: '12em',
    // fontSize: 16,
    // fontWeight: 400
  },
  locationMap: {
    // border: '2px solid red',
    // width: '15em',  
    // height: '10em',
    // marginTop: '0.5em',
    // '& img': {
    //   width: '100%',
    //   height: '100%',
    // }
  },
  kmSlider: {
    // width: '15em', 
  },
  // startup category section at at the left of the main section
  startupCategorytSection: {
    border:'2px solid yellow',
    width: '25%'
  },
  typeOfBusiness: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  categoryTitle: {
    marginLeft: 10,
    fontSize: 20,
    color: '#242F65',
    fontWeight: 600,
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
  // section to display all startups in the right section
  startupRightSection: {
    border: '2px solid red',
    width: '73%',
  },
  // tabs in startups' section
  tabSection: {
    border: '2px solid yellow',
    padding: '0.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  startupListSection: {
    border: '2px solid black',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // startup card container styles
  startupCardContainer: {
    border: '2px solid blue',
    width: '14em',
    marginBottom: '1em',
    alignSelf: 'center',
    // margin: '0 0.5em 1em 0',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '1em',
    // height: 130,
    borderRadius: '10px',
    background: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
  },
  headSection: {
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'space-between',
  },
  // image section in the card
  imageSection: {
    width: '80%',
    border:'2px solid yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    
  },
  imageContainer: {
    width: 85,
    height: 85,
  },
  startupImage: {
    width: '100%',
    height: '100%'
  },
  startupTitle: {
    marginTop: '0.6em',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 500,
    marginBottom: '0.3em'
  },
  location: {
    fontFamily: 'poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '15px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  locationImage: {
    marginRight: '0.5em',
    width: 8,
    height: 8,
  }, 
  descriptionSection: {
    border:'2px solid yellow',
    textAlign: 'left',
  },
  description: {
    fontFamily: 'poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '16px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  // detail section in the card
  startupDetailSection: {
    // color: '#0E0E31',
    // width: '70%',
    // padding: '0.5em',
    // display: 'flex',
    // flexDirection: 'column',
  },
  titleSection: {
    // borderBottom: '1px solid #EAEAEA'
  },
  profileTitle: {
    // width: '100%',
    // textAlign: 'left',
    // fontSize: 20,
    // fontWeight: 500,
  },
  detailsSection: {
    // paddingTop: '0.8em',
    // display: 'flex',
  },
  typeImage: {
    // width: 11,
    // height: 12,
    // color: '#B3B1B7',
    // marginRight: 3,
  },
  detailType: {
    // fontSize: 14,
    // marginRight: 10,
  },
  // saved profile section in the card
  savedSection: {
    // height: 85,
    // color: '#AFB3B9',
  },
  timeStamp: {
    // fontSize: 14,
    // fontWeight: 400, 
  },
  savedProfile: {
    // width: 15,
    // marginTop: "0.4em",
    // cursor: 'pointer'
  }
}));

