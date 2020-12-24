import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    cardContainer: {
        marginTop: '1.5em',
        width: '10em',
    },
    jobTitle: {
        position: 'absolute',
        zIndex: 1,
        padding:'1em',
        width: '5em',
    },
    designationImage: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '10px'
    },
    jobSection: {
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    sectionHeader: {
        width:'60%',
    },
    headerContents: {
        textAlign: 'left',
        lineHeight:'0.7rem',
        fontFamily: 'poppins',
        color: '#242F65',
        paddingLeft: 30,
    },
    jobsContainer: {
        width:'60%',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}))

