import React from 'react';
import classes from './AboutMe.module.css';
import AboutMeHero from '../../components/AboutMe/AboutMeHero/AboutMeHero';
import AboutMeContent from '../../components/AboutMe/AboutMeContent/AboutMeContent';

const AboutMe = props => {
    return (
        <div className={classes.AboutMe}>
            <AboutMeHero />
            <div className={classes.Content}>
                <AboutMeContent />
            </div>
        </div>
    )
}

export default AboutMe;