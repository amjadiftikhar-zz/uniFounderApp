import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  // specific post container styles
  specificPostContainer: {
    boxShadow:' 0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  // specific post left detail section styles
  specificDetailSection: {
    marginRight: '1em',
    width: '100%',
    background: '#FFFFFF',
    padding: '1em',
  },
  postUpperSection: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  postUpperLeftSection: {
    display: 'flex'
  },
  postTitleSection: {
    marginLeft: '1em',
  },
  startupPostTitle: {
    fontSize: 25,
    fontWeight: '500px',
    color: '#0E0E31'
  }, 
  detailsSection: {
    marginTop: '2em',
    padding: '0.5em',
    height: 30,
    background: '#F8F8FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9,
  },
  detailTypeGroup: {
    display: 'flex',
  },
  //specific post description section styles
  specificPostDescription: {
    textAlign: 'left',
    padding: '1em',    
  },
  postDescription: {
    fontSize: 14,
    color: "#0E0E31",
  },
  teamMemberSection:{
    textAlign: 'left',
    padding: '1em',
  },
  teamMemberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10em',
  },
  memberProfileImage: {
    height: 70,
    width: 70,
  }, 
  memberTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',      
    color: '#0E0E31',
  }, 
  jobTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',      
    color: '#0E0E31',
  },
  teamProfiles: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  startupDescriptionSection: {
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#F1F4FD',
    borderRadius: 10,
  },
  startupDetailSection: {
    textAlign: 'left',
    marginRight: '1em',
  },
  specificStartupImage: {
    width: 300,
    height: 200,
  },
  specificStartupImageSection: {
    textAlign: 'left',
  }, 
  otherStartupSection: {
    textAlign: 'left',
    padding: '1em',
  },
  // suggested post section styles 
  relevantPostSection: {
    display: 'fex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  suggestedPostContainer: {
    width: '15em',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    background: '#FFFFFF',
    borderRadius: 10,
    padding: '0.5em',
    marginBottom: '1em',
  },
  // suggested post card styles 
  suggestedPostCard: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1em',
  },
  suggestedProfileTitle: {
    width: '100%',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 400,
  },
  suggestedDetailsSection: {
    borderTop: '1px solid #EAEAEA',
    borderBottom: '1px solid #EAEAEA',
    display: 'flex',
    marginTop: '0.5em',
    padding: '0.3em 0 0.3em 0'
  }, 
  suggestedSavedSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '0.5em',
  },
  suggestedQueryTitle: {
    textAlign: 'left',
    background: '#F1F4FD',
    height: '3em',
    paddingRight: '4em',
    padding: '1em',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#242F65',
  },
  // styles, border between two sections
  borderSection: {
    width: '251px',
    height: '0px',
    left: '1123px',
    top: '1299px',
    border: '1px solid #D8D8D8',
    marginTop: '2em',
    marginBottom: '2em',
  },
  suggestedInfoSection: {
    paddingTop: '1em',
    paddingBottom: '1em'
  },
  suggestedQueryInfo: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#6E727E',
    marginBottom: '1em',
  },
  suggestedQuerySection: {
    textAlign: 'left',
  },
  searchBtn: {
    width: '100%',
  },  
  // startup links to specific post in the card
  startupPostLink: {
    textDecoration: 'none',
    color: '#0E0E31',
  },
  // image section in the card
  imageSection: {
    width: 70,
    height: 70,
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
  startupTitle: {
    width: '100%',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 400,
    paddingBottom: '0.5em',
    color: '#0E0E31'

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
  applyBtn: {
    textTransform: 'none',
  },
  // saved profile section in the card
  timeStamp: {
    fontSize: 14,
    fontWeight: 400, 
  },
  savedProfile: {
    width: 15,
    marginTop: "0.4em",
    cursor: 'pointer'
  },
}));

