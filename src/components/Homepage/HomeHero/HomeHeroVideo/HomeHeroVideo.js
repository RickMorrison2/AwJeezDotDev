import React from 'react';
import classes from './HomeHeroVideo.module.css';
import TreesLoop from '../../../../assets/videos/TreesLoop.mp4';

const HomeHeroVideo = (props) => {
    return (
        <div className={classes.PlayerWrapper}>
            <video
                className={classes.Player}
                autoPlay
                autoplay
                muted
                loop
                width="100%"
                height="100%"
                src={TreesLoop}
            />
            Your browser does not support the video tag.
        </div>
    );
};

export default HomeHeroVideo;
