import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    navbarSection: {
        display: 'flex',
        flexDirection:'column'
    },
    upperSection: {
        padding:'1.8px',
        background:"#0E0E31",
        color: 'white',
        fontSize: '0.6rem'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFFFFF',
        paddingTop: '8px',
        paddingBottom: '8px',
        '& a': {
            // marginTop: 10,
            // ontFamily: 'Poppins',
            // fontStyle: 'normal',
            // fontWeight: '500',
            // fontSize: '14px',
            // lineHeight: '21px',
            // textTransform: 'revert',
            // color: '#242F65', 
            // '&:nth-last-child(2)': {
            //     borderLeft: '1px solid #cccccc',
            // },            
        },
        '& img': {
            marginLeft: 25,
        }
    },
    rightSection: {
        display: 'flex',
        width: '40%'
    },
    navItem: {
        minWidth:50
    },
    userLabel: {
        borderRadius: '50%',
        minWidth: 20,
        background: '#ffffff',
        marginRight: '50px',
    },
    leftBorder: {
        borderLeft: '1px solid #cccccc'
    },
    displayCursor: {
        cursor: 'pointer'
    },
    buttons: {
        backgroundColor: "transparent",
        boxShadow: "none",
        fontSize: "0.93rem",
        marginTop: "10px",
        textTransform: 'revert',
        "&:focus": {
          outline: "none",
        },
        "&:hover": {
          backgroundColor: "transparent",
          outline: "none",
          boxShadow: "none",
        },
      },
      icons:{
          color: "#ddd",
          display: "inline",
          flexDirection: "row"
      },
      dropDown :{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: "30px",
          top: "80px",
          backgroundColor:"#fff",
          height: "210px",
          width: "215px",
          boxShadow: "1px 1px 10px 2px rgba(0,0,0,0.34)",
          borderRadius: "10px",
          zIndex: 10,
          padding: "10px 0"
      },
      userInfoContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      
        width: "180px",
        padding: "0 20px"
      },
      dropDownImage:{
          height: "30px",
          width:"30px",
          borderRadius: "50%",
          marginLeft: "0px !important",
          marginRight: "20px"
      },
       userPhoto: {
           width: 40,
           height: 40,
       }
}));

