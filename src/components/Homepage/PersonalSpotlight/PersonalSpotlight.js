import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './PersonalSpotlight.module.css';
import HoldingLoki from '../../../assets/images/HoldingLoki.jpg';
import OneWheelPoseMin from '../../../assets/images/OnewheelPoseMin.jpg';
import SierrasCar from '../../../assets/images/SierrasCar.jpg';
import { Parallax } from 'react-scroll-parallax';
import { Button } from '@material-ui/core';

const PersonalSpotlight = (props) => {
    let history = useHistory();
    const portfolioButtonClickedHandler = () => {
        history.push('/portfolio');
    };
    return (
        <div className={classes.Spotlight}>
            <br />
            <h1>I Make Websites (Like This One!)</h1>
            <div className={classes.ImageHolder}>
                <Parallax className={classes.Image} x={[-10, 50]}>
                    <img
                        alt="Me holding my adorable kitty, Loki"
                        src={HoldingLoki}
                    />
                </Parallax>
                <Parallax className={classes.Image} x={[0, 0]}>
                    <img
                        alt="A great shot I took and edited of Sierra's car up in Breckenridge, CO"
                        src={SierrasCar}
                    />
                </Parallax>
                <Parallax className={classes.Image} x={[10, -50]}>
                    <img
                        alt="Me posing with my trusty Onewheel, XavieR"
                        src={OneWheelPoseMin}
                    />
                </Parallax>
            </div>
            <br />
            <p>
                My passion lies in building clean, user-friendly
                interfaces using the latest front-end frameworks such as React
                and Vue. I'm currently seeking new opportunities to expand my
                skill set and apply the skills I've already sharpened. Take a
                look at my Portfolio page for examples of my work.
            </p>
            <Button variant="contained" onClick={portfolioButtonClickedHandler}>
                View Portfolio
            </Button>
        </div>
    );
};

export default PersonalSpotlight;
