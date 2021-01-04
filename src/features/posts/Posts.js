import React, {useState} from 'react';
import {Grid, Typography, Tab, Button, Paper, IconButton, InputBase} 
from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {postsObj} from "./posts.obj";
import {useStyles} from "./posts.styles";
import PostCard from './PostCard';
import PostCategory from './PostCategory';
import SpecificPost from './specificPost/SpecificPost';

export default function Posts({toggleToPosts}) {

    const classes = useStyles();

    const [toggleSpecificPost, setToggleSpecificPost] = useState(false)

    function toggleToPosts(e){
        e.preventDefault()
        setToggleSpecificPost(toggleSpecificPost => !toggleSpecificPost)
    }
    
    return (
        <>
        {toggleSpecificPost ? <SpecificPost/> :
        <Grid className={classes.postMainSection}>
            <Grid className={classes.inviteSection}>
                <span className={classes.inviteDescription}> 
                Boost your profile visibility by inviting your friends 
                to Unifounder!</span>
                <button className={classes.inviteBtn}>Invite</button>
            </Grid>
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
                        <IconButton className={classes.iconButton} 
                            aria-label="search"
                        >
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
                <Grid className={classes.postsRightSection}>
                    <Grid className={classes.tabSection}>
                        <span className={classes.tabElement}>Showing 600 filtered posts</span>
                        <span className={classes.tabElement}>Seeking a co-founder?
                            <a className={classes.tabLinks} href="">Create Your Own Post!</a>
                        </span>
                        <span className={`${classes.tabElement}, ${classes.tabElementExpand}`}>Sort By,
                            <a className={classes.tabLinks} href="">Most Recent</a><ExpandMoreIcon/>
                        </span>
                    </Grid>
                    <Grid className={classes.postListSection}>
                        {postsObj.map((post, index) => {
                            return(
                                <PostCard
                                    toggleToPosts = {toggleToPosts}
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
        </Grid>
        }
        </>
    )
}