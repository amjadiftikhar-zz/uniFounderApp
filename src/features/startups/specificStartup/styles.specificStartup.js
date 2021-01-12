import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  // specific styles for startup container contains a specific startup
  specificStartupPostContainer: {
    border: '2px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '3em 0 0 2em',
  },
  specificStartupCardSection: {
    border: '2px solid yellow',
    width: '73%',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  startupBannerSection: {
    width: '100%',
  },
  startupBanner: {
    border: '2px solid black',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  //styles specific starup left section card with details about startup 
  startupCardSection: {
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
  }, 
  imageSection: {
    width: 150,
    height: 150,
  },
  startupImage: {
    width: '100%',
    height: '100%'
  },
  startupTitleSection: {
    border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1em',
    marginLeft: '1em',
    width: '100%'
  },
  profileTitle: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontSize: '35px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0px',

  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  startupDetails: {
    border: '2px solid yellow',
    background: '#F8FAFF',
    borderRadius: 6,
    marginTop: '1.5em',
    width: '65%',
    padding: '2em 2em 0 2em',
    display: 'flex',
    flexDirection: 'column',
  },
  detailType: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '21px',
    display: 'flex',
    alignItems: 'center',
  },
  typeImage: {
    marginRight: '0.5em',
    width: 15,
    height: 15
  },
  detailTypeSection: {
    marginTop: '0.5em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  //styles specific starup description section
  specificStartupDescription:{
    border: '2px solid red',
    textAlign: 'left',
    padding: '0 3em 0 3em',
  },
  sectionTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#0E0E31',
  },
  startupDescription: {
      '& p': {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '22px',
        color: '#0E0E31',
      },
      '& li': {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '22px',
        color: '#0E0E31',
    }
  },
//styles specific starup right section suggested startups cards 
  relevantStartupSection: {
    // border: '2px solid blue',
    // width: '25%',
  },
  suggestedStartupCard: {
    width: '25%',
    marginLeft: '2em',
  },
 savedSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid orange',
    height: 100,
    width: '10em',
    marginTop: '1em',
  },
  contactBtn: {
    marginTop: '2em',
    textTransform: 'none',
  },
  suggestedQueryTitle: {
    border: '2px solid red',
    width: '10.5em',
    textAlign: 'left',
    background: '#F1F4FD',
    height: '3em',
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
    width: '25%',
    width: '251px',
    height: '0px',
    left: '1123px',
    top: '1299px',
    border: '1px solid #D8D8D8',
    marginTop: '2em',
    marginLeft: '2em',
    marginBottom: '2em',
  },
  suggestedInfoSection: {
    paddingTop: '1em',
    paddingBottom: '1em'
  },
  suggestedPostContainer: {
    width: '15em',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    background: '#FFFFFF',
    borderRadius: 10,
    padding: '0.5em',
    marginBottom: '1em',
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
    width: '15em',
    textAlign: 'left',
    marginLeft: '2em',
  },
  searchBtn: {
    width: '100%',
  },
  expandAll: {
    width: '14em',
    marginLeft: '2em',
    padding: '1em',
    border: '2px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0px',
        textAlign: 'center',  
    }    
  },
}));

