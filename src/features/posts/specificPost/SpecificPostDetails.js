import React from 'react';
import SepcificPostCard from "./SpecificPostCard";
// import {postsObj} from "../posts.obj";

function SpecificPostDetails() {
    return (
        <div>
            <SepcificPostCard/>
            {/* {postsObj.map(specificPost => {
                return(
                    <SepcificPostCard 
                        startupImage={specificPost.startupImage}
                        profileTitle={specificPost.profileTitle}
                        startupTitle={specificPost.startupTitle}
                        businessType={specificPost.businessType}
                        location={specificPost.location}
                        jobCategory={specificPost.jobCategory}
                        userType={specificPost.userType}
                        timeStamp={specificPost.timeStamp}
                    />
                )
            })} */}
        </div>
    )
}

export default SpecificPostDetails
