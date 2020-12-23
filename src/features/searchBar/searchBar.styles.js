import {makeStyles, Theme, useTheme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      padding: '10px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      borderRadius:"0",
      [theme.breakpoints.between("sm", "md")]: {
        width:700
      },
      [theme.breakpoints.only("xs")]: {
        flexDirection:"column",
        width:343
      },

    }, 
    buttonContainer: {
        // border: '2px solid black',
        display: 'flex',
    },
    searchWrapper:{
      width:360,
      [theme.breakpoints.only("xs")]: {
        display:"flex",
        width:345
      },
    },
    locationWrapper:{
        borderLeft: '0.83px solid #DDDBE4',
        width:360,
        [theme.breakpoints.only("xs")]: {
        display:"flex",
        width:345
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 32,
      margin: 4,
      [theme.breakpoints.only("xs")]: {
        width:"97%",
        height:1

      },
    },
    btnWrapper:{
      [theme.breakpoints.only("xs")]: {

        width:"100%"
      },
    },
    buttons:{
      backgroundColor:"white",
      boxShadow:"none",
      borderRadius:"0",
      fontSize: 8,
      fontWeight: 500,
      color: '#261D56',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor:"#3936C4",
      fontSize:'16px',
      fontFamily: 'poppins',
      color:"white",
      borderRadius: '5px',
      [theme.breakpoints.only("xs")]: {
        padding:"10px 130px"
      },
    },
  })
);
