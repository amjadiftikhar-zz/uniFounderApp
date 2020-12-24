import {makeStyles, Theme, useTheme} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    mainContainer: {
        paddingTop: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    middleContainer: {
        // width: '40em',
        width: '35em',
        // border: "2px solid red",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'baseline'
    },
    contentWrapper: {
        marginBottom: '1em',
        width: '10.4em',
        fontSize: '40px',
        color: '#242F65',
        fontFamily: 'Poppins',
        textAlign: 'left'
    },
    searchField: {
        // border: '2px solid yellow'
    },
    trendingContainer: {
        marginTop: '3em',
        display: 'flex',
        flexDirection: 'column',
    },
    trendingTitle: {
        textAlign: 'left',
        fontSize: '16px',
        color: '#242F65',
        fontFamily: 'Poppins',
    },
    linkContainer: {
        width: '35em',
        display: 'flex',
        flexWrap: 'wrap',
    },
    linkItem: {
        padding: '4px 6px',
        mixBlendMode: 'normal',
        opacity:'0.72',
        border: '1px solid #3936C4',
        borderRadius:' 15px',
        font: '#3936C4',
        margin: '5px'
    }
}))

