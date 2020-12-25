import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    cardContainer: {
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1em',
        width: '13em',
        padding: '0.8em',
        boxshadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '11px',
    },
    headSection: {
        display:'flex',
        paddingTop: '1em',
        justifyContent:'space-between',
    },
    imageSection: {
        width: '35%',
    },
    unsavedProfile: {
        height:12,
        width: 12,
    },
    profileImage: {
        width: '100%',
    },
    titleSection: {
        lineHeight: '0.2em',
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        paddingLeft: '0.8em'
    },
    userProfileTitle: {
        textAlign: 'left',
        fontSize: '20px',
        color: '#0E0E31',
        fontFamily: 'poppins',
        marginBottom: '0.5em'
    },
    detailSection: {
        textAlign: 'left'
    },
    location: {
        textAlign: 'left',
        fontSize:'14px',
        color: '#0E0E31',
        fontFamily: 'poppins'
    },
    locationImage: {
        paddingRight: '0.5em',
        width: '10px',
    },
    description: {
        textAlign: 'left',
        fontSize: '14px',
        color: '#6E727E',
        fontFamily: 'poppins'
    },
    skillSection: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    skillContainer: {
        border: '1px solid #3936C4',
        margin: '5px',
        background:'#F1F4FD',
        fontSize: '11px',
        color:'#3936C4',
        fontWeight: 500,
        borderRadius: '15px',
        padding: '3px'
    },
    userProfileSection: {        
        marginTop: '5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    userCardSection: {
        width:'60%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    profileSectionHeader: {
        width:'57%',
    }, 
    profileDescription: {
        textAlign: 'left',
        lineHeight: '0.8rem',
        color: '#242F65',
        fontFamily: 'poppins'
    },
    exploreSection: {
        width:'57%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    exploreAll: {
        padding:'0.2em',
        display: 'flex',
        alignItems: 'center', 
        color: '#959AA2',
        fontSize: '16px',
        '& a': {
            color: 'blue',
            textDecoration: 'none',
            fontSize: '16px',
        }       
    },
    totalUserContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2em',
        background: '#F1F4FD',
        width: '15em',
        borderRadius: '0px 0px 50px 0px',
    },
    button: {
        background: '#3936C4',
        borderRadius: '5px',
        marginTop: '1em',
        '& Button': {
            color: 'white',
            fontSize: '12px',
            fontFamily: 'poppins',
        }
    }
}))

