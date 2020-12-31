import React from 'react';
import HeroComponent from '../hero/HeroComponent';
import Partners from '../partners/Partners';
import CandidatesList from "../candidates/CandidatesList";
import StartupList from '../startups/StartupList';
import UserList from "../users/UserList";
import HeroPexel from '../subHero/HeroPexel';

function HomePage() {
    return (
        <div>
            <HeroComponent/>
            <Partners/>
            <CandidatesList/>
            <UserList/>
            <StartupList/>
            <HeroPexel/>
        </div>
    )
}

export default HomePage;
