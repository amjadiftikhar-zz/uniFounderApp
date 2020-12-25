import React from 'react';
import {Grid, Typography, IconButton} from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandMore from "@material-ui/icons/ExpandMore";
import userPic from "../../assets/images/userPic.png";
// import dropBox from "../../assets/images/dropbox.png";
// import airbnb from "../../assets/images/airbnb.png";
// import mercedes from "../../assets/images/mercedes.png";
import User from "./User";
import TotalUsers from "./TotalUsers";
import {useStyles} from "./users.styles";

const userProfileObj = [ { userProfileTitle:'John Doe', profileImage: userPic, location: 'Stockholm', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Copenhagen', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Stockholm', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Copenhagen', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Stockholm', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Copenhagen', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Stockholm', professionType: 'Tech', skills:"Development" }, 
    { userProfileTitle:'John Doe', profileImage: userPic, location: 'Copenhagen', professionType: 'Tech', skills:"Development" }
]

function UserList() {
    const classes = useStyles();
    return (
        <Grid className={classes.userProfileSection}>
            <Grid className={classes.profileSectionHeader}>
                <Typography className={classes.profileDescription}>
                    <h2>Find a person to build your business with </h2>
                    <p style = {{fontSize:'16px'}}>
                        Browse through  1000+ users and find a perfect match for you startup need
                    </p>
                </Typography>
            </Grid> 
            <Grid className={classes.exploreSection}>
                <Typography className={classes.exploreAll}>
                   <a href="">Explore All</a> <ChevronRight className={classes.chevron}/>
                </Typography>
                <Typography className={classes.exploreAll}>
                    Industory: <a href="">Internet & Technology</a> <ExpandMore/>                  
                </Typography>
            </Grid> 
            <Grid className={classes.userCardSection}>
            {
                userProfileObj.map(u => {
                    return(
                        <User userProfileTitle={u.userProfileTitle}
                            profileImage={u.profileImage}
                            location={u.location}
                            professionType={u.professionType}
                        />
                    )
                })
            }
            <TotalUsers 
                totalUsers="150+"
                Profiles="Profiles" 
            />
            </Grid>             
        </Grid>
    )
}

export default UserList;
