import React from 'react';
import HeroComponent from '../hero/HeroComponent';
import Partners from '../partners/Partners';
import JobList from "../jobs/JobsList";
import StartupList from '../startups/StartupList';
import UserList from "../users/UserList";
import HeroPexel from '../subHero/HeroPexel';

function HomePage() {
    return (
        <div>
            <HeroComponent/>
            <Partners/>
            <JobList/>
            <UserList/>
            <StartupList/>
            <HeroPexel/>
        </div>
    )
}

export default HomePage;
