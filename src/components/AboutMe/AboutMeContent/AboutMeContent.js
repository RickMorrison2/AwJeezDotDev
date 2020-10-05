import React from 'react';
import classes from './AboutMeContent.module.css';
import Nova from '../../../assets/images/Nova.jpg';
import Loki from '../../../assets/images/Loki.jpg';

const AboutMeContent = props => {
    return (
        <div className={classes.Content}>
            <h1>A Brief Introduction to Rick</h1>
            <p>My life as a web developer began in late 2018, when I decided my existing career in customer service wasn't offering the creative outlet I needed. Though I had learned what users want and how to solve their problems, I craved the ability to expand my creative abilities and actually take control to create the applications users interact with. 
                As soon as I wrote my first "Hello World" program in JavaScript, I quit my job and never looked back.</p><p>Shortly after diving head-first into teaching myself to code, I attended the 18-week Hack Reactor @ Galvanize Software Engineering Immersive Program -- a rigorous development boot camp where I learned the latest professional coding principles and changed my life.
                Through this program I obtained a full-stack web development skill set, specializing in React, Node.js, Express, and MongoDB.</p><p>After graduating from Hack Reactor @ Galvanize, I taught myself React Native and developed my first mobile application, StarSearch for iOS and Android.
                I then accepted a web developer position with Edison Interactive and began learning Vue.js and PHP with Laravel. I soon applied these technologies to build <a href="http://www.edisoninteractive.com/" target="_blank" rel="noopener noreferrer">EdisonInteractive.com</a> and portions of <a href="http://www.edisonlive.com/" target="_blank" rel="noopener noreferrer">EdisonLive.com</a>, further solidifying my development skills.
                Now I'm seeking new professional opportunities to apply my user-first background with the technical skills I've already learned, while continuing to expand my skill set.</p>
                <p>When I'm not coding you can usually find me editing videos on my custom-built PC, floating around town on one of 
                    my <a href="http://www.onewheel.com" target="_blank" rel="noopener noreferrer">Onewheels</a>, 
                    spoiling my cats <span className={classes.Tooltip}>Nova<span className={classes.TooltipText}><img src={Nova} height="98%" width="auto" alt="My firstborn, Nova"/></span></span> and <span className={classes.Tooltip}>Loki<span className={classes.TooltipText}><img src={Loki} height="98%" width="auto" alt="My little baby, Loki"/></span></span>, 
                    or trying to capture some of life's beauty through photography and videography (all the image and video content on this site is my own original work.) I also occasionally release art under the name Aw Jeez, so <a href="http://www.awjeez.fun" target="_blank" rel="noopener noreferrer">click here</a> to see some of my more artistic side.</p>
        </div>
    )
}

export default AboutMeContent;