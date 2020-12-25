import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    mainContainer: {
        padding: "2em 0 4em 0",
        width: '100%',
        marginTop: '10em',
        background: '#F8F8FA',
        display: 'flex',
        flexWrap: 'wrap',
    },
    pexelImageSection: {
        width: '30%',
    },
    pexelImage: {
       width: '100%'
    },
    detailSection: {
       width: '20em',
       textAlign: 'left',
       marginLeft: '4em',
       color: '#242F65',
       fontFamily: 'poppins'
    },
    button: {
        padding: "2em 0 2em 0",
        height: '2em',
        width:'12em',
        background: '#3936C4',
        borderRadius: '5px',
        marginTop: '1em', 
        color: 'white',
        fontSize: '12px',        
        fontFamily: 'poppins',
        fontWeight: 400,
    }
}))

