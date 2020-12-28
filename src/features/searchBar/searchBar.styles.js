import {makeStyles, Theme, useTheme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      padding: '10px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }, 
    buttonContainer: {
        display: 'flex',
    },
    searchWrapper:{
      width:360,
    },
    locationWrapper:{
        borderLeft: '0.83px solid #DDDBE4',
        width:360,
    },
    input: {
      // marginLeft: theme.spacing(1),
      flex: 1,
      width: 185,
      fontSize: 12,
      padding: 3,
    },
    iconButton: {
      padding: 3,      
    },
    divider: {
      height: 32,
      margin: 4,
    },
    btnWrapper:{
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
      // margin: theme.spacing(1),
      backgroundColor:"#3936C4",
      fontSize: '12px',
      fontFamily: 'poppins',
      color:"white",
      borderRadius: '5px',
    },
  })
);
