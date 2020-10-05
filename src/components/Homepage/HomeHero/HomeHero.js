import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './HomeHero.module.css';
import { Button } from '@material-ui/core';
// import HomeHeroVideo from './HomeHeroVideo/HomeHeroVideo';
import VideoPlayer from './HomeHeroVideo/VideoPlayer';
import TreesLoop from '../../../assets/videos/TreesLoop.mp4';

const HomeHero = (props) => {
    let history = useHistory();
    const learnMoreButtonClickedHandler = () => {
        history.push('/about-me');
    };

    const videoJsOptions = {
        autoplay: 'muted',
        controls: false,
        responsive: true,
        loop: true,
        fill: true,
        sources: [{
            src: TreesLoop,
            type: 'video/mp4'
        }]
    }

    return (
        <div className={classes.Container}>
            {/* <HomeHeroVideo /> */}
            <div className={classes.PlayerWrapper}>
                <VideoPlayer { ...videoJsOptions } />
            </div>
            <div className={classes.Content}>
                <div className={classes.SubContent}>
                    <h1>Hi. I'm Rick Morrison.</h1>
                    <p>
                        I'm a front-end web developer, computer and video nerd,
                        hopeless Onewheel addict, and a bit of an artist as
                        well. Thanks for checking out my website.
                    </p>
                    <Button
                        variant="contained"
                        onClick={learnMoreButtonClickedHandler}
                    >
                        Learn More About Me
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
