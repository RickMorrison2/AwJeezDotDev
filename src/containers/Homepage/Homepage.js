import React from 'react';
import ContactCTA from '../../components/Homepage/ContactCTA/ContactCTA';
import HomeHero from '../../components/Homepage/HomeHero/HomeHero';
import PersonalSpotlight from '../../components/Homepage/PersonalSpotlight/PersonalSpotlight';
import classes from './Homepage.module.css';

const Homepage = (props) => {
    return (
        <div className={classes.Homepage}>
            <main className={classes.Main}>
                <HomeHero />
                <PersonalSpotlight />
                <ContactCTA />
            </main>
        </div>
    );
};

export default Homepage;
