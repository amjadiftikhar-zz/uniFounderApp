import React from 'react';
import HeroComponent from '../hero/HeroComponent';
import Partners from '../partners/Partners';
import JobList from "../jobs/JobsList";

function HomePage() {
    return (
        <div>
            <HeroComponent/>
            <Partners/>
            <JobList/>
        </div>
    )
}

export default HomePage;
