import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  // specific styles for startup container contains a specific startup
  specificStartupPostContainer: {
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  specificStartupMainSection: {
    border: '2px solid skyblue',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  startupBanner: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  //styles specific starup left section card with details about startup 
  startupCardSection: {
    border: '2px solid black',
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // marginRight: '1em',
    // width: '100%',
    // background: '#FFFFFF',
    // padding: '1em',
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
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1em',
    marginLeft: '1em',
    width: '100%'
  },
  profileTitle: {
    // border: '2px solid white',
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
    width: '35em',
    padding: '2em 2em 0 2em',
    display: 'flex',
    flexDirection: 'column',
  },
  detailType: {
    // border: '2px solid red',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '21px',
    display: 'flex',
    alignItems: 'center',
  },
  typeImage: {
    // border: '2px solid black',
    marginRight: '0.5em',
    width: 15,
    height: 15
  },
  detailTypeSection: {
    // border: '2px solid black',
    marginTop: '0.5em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  //styles specific starup description section
  specificStartupDescription:{
    border: '2px solid red',
    textAlign: 'left',
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
    border: '2px solid blue',
    width: '30em',
  },
  suggestedStartupCard: {
    marginRight: '1em',
    marginLeft: '1em',
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
  }
}));

