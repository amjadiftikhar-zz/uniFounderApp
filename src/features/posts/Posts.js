import React from 'react';
import {Grid, Typography, Button, Paper, IconButton, InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import adobeImage from "../../assets/images/adobe.png";
import dropBox from "../../assets/images/dropbox.png";
import airbnb from "../../assets/images/airbnb.png";
import mercedes from "../../assets/images/mercedes.png";
import {useStyles} from "./posts.styles";
import PostCard from './PostCard';
import PostCategory from './PostCategory';

const postsObj = [ { startupTitle:'Adobe', profileTitle:'Manager', startupImage: adobeImage, location: 'Stockholm, SE', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Mercedes', profileTitle:'Head of the third party strategy deal', startupImage: mercedes, location: 'Copenhagen, Dk', businessType: 'Tech', timeStamp: '3 days ago' , jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Drop Box', profileTitle:'Sale Engineer', startupImage: dropBox, location: 'Stockholm, SE', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Adobe', profileTitle:'Brand Marketing Manager', startupImage: mercedes, location: 'Copenhagen, Dk', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Airbnb', profileTitle: 'Software Developer', startupImage: airbnb, location: 'Stockholm, SE', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Drop Box', profileTitle:'Manager', startupImage: dropBox, location: 'Copenhagen, Dk', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Adobe', profileTitle:'Marketing Manager', startupImage: adobeImage, location: 'Stockholm, SE', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }, 
    { startupTitle:'Mercedes', profileTitle:'Designer', startupImage: mercedes, location: 'Copenhagen, Dk', businessType: 'Tech', timeStamp: '3 days ago', jobCategory: 'Full time', userType: 'partner' }
]

export default function Posts() {
    const classes = useStyles();
    return (
        <Grid className={classes.postMainSection}>
            <Grid className={classes.postSearchSection}>
                <Grid className={classes.postHeaderSection}>
                    <Typography className={classes.postHeader}>
                        Posts
                    </Typography>
                    <Typography className={classes.postDescription}>
                        Find the most relevant posts published by startups. 
                    </Typography>
                </Grid>
                <Paper component="form" className={classes.postSearch}>
                    <div className={classes.searchWrapper}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search by title or keyword"
                        />
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}                
                        >
                        Search
                        </Button>
                    </div>
                </Paper>
            </Grid>
            <Grid className={classes.postBodySection}>
                <Grid className={classes.postCategorytSection}>
                    <PostCategory/>
                </Grid>
                <Grid className={classes.postListSection}>
                    {postsObj.map((post, index) => {
                        return(
                            <PostCard
                                key = {index}
                                startupImage = {post.startupImage}
                                profileTitle = {post.profileTitle}
                                startupTitle = {post.startupTitle}
                                businessType = {post.businessType}
                                location = {post.location}
                                clockImage = {post.clockImage}
                                timeStamp = {post.timeStamp}
                                jobCategory = {post.jobCategory}
                                userType = {post.userType}
                            />
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}