import {makeStyles, Checkbox} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export const CustomCheckbox = withStyles({
  root: {
    textTransform: "none",
    '&:checkbox': {
      background: "blue",
      color: "#fff"
    },
  },
})(Checkbox); 

export const useStyles = makeStyles((theme) => ({
  // main startup section/page to display all startups
  startupMainSection: {
    background: '#FFFFFF',
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
  //styles for the tab elements in the right section
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
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 500,
  },
  // startup category section at at the left of the main section
  startupCategorytSection: {
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
  // section to display all startups in the right section
  startupRightSection: {
    width: '73%',
  },
  // tabs in startups' section
  tabSection: {
    padding: '0.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  startupListSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  expandStartups: {
    margin: '0 auto',
    marginTop: '3em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    background: '#F1F4FD',
    cursor: 'pointer',
  },
  // startup card container styles
  startupCardContainer: {
    width: '14em',
    marginBottom: '1em',
    alignSelf: 'center',
    padding: '1em',
    borderRadius: '10px',
    background: 'white',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  headSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  // image section in the card
  imageSection: {
    width: '80%',
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
  savedProfile: {
    width: 25,
    height: 25,
  }, 
  descriptionSection: {
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
  profilePostSection: {
    display: 'flex', 
    justifyContent: 'space-between',    
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    height: '30px',
    width: '30px',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
  },
  profTitle: {
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '15px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  profDesignation: {
    fontFamily: 'Poppins',
    fontSize: '8px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '12px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  totalPosts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    width: '49px',   
    borderRadius: '3px',
    background: '#F1F4FD',
  },
  totalPost: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21px',
    color: '#3936C4',
  },
  post: {
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '15px',
    color: '#3936C4',
  },
}));

