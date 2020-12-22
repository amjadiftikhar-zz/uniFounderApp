import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    footerSection: {
        width: '100%',
        display: 'flex',
        alignItems:'flex-start',
        justifyContent: 'space-around'
    },
    homepageFooter:{
        width: '100%',
        padding:25,
        marginTop:'calc(5% + 60px)',
        bottom: 0,
        background: '#06124E',
        '& p':{
          marginBottom:'20px',
        },
        '& a':{
          display:'block',
          alignItems:'flex-start',
          padding:'5px 5px 5px 0',
          color:'#ffffff',
        }
    },
    linkClass: {
        display:"flex", 
        flexDirection:"column",
        alignItems:"flex-start"
    },
    address:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'start',        
        width: '14em',
        '& img':{          
            marginBottom:'10px',
            height:30,
            width:199,
        },
        '& p':{
            margin: '5px 5px  0 0',
            fontWeight:'normal',
            fontSize:'14px',
            color: 'white'
        },
        '& a':{
            display:'inline',
        },
    },
    socialIcons:{
        '& img':{
        height:'20px!important',
        width:'20px!important',
        margin:'15px 20px 0 0',
        },        
    },
    linkHeaders: {
        color: '#FF785B!important'
    }
}));

