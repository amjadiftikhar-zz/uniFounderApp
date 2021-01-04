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
  // main post section/page
  postMainSection: {
    background: '#F2F2F2',
    position: 'relative',
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
  postBodySection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '2em 4em 2em 4em'
  },
  citySearchWrapper: {
    border: '2px solid #E5E4EB',
    height: 45,
    marginTop: '1em',
  },
  tabElement: {
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
    alignItems: 'center'
  },
  input: {
    width: '12em',
    fontSize: 16,
    fontWeight: 400
  },
  locationMap: {
    // border: '2px solid red',
    width: '15em',  
    height: '10em',
    marginTop: '0.5em',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  kmSlider: {
    width: '15em', 
  },
  postCategorytSection: {
    width: '30%'
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
  // section to display posts
  postsRightSection: {
    // border: '2px solid yellow',
    width: '68%',
  },
  // tabs in posts' section
  tabSection: {
    padding: '0.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postListSection: {
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // post card container 
  postCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1em',
    height: 130,
    borderRadius: '10px',
    background: 'white',
    marginBottom: '1em',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
  },
  // startup links to specific post in the card
  startupPostLink: {
    textDecoration: 'none',
    color: '#0E0E31',
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

