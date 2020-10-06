import React from 'react';

const Intro = (props) => {
    return (
        <div className="parallax-content banner-content" id="home">
            <div className="container">
                <div className="first-content">
                    <h1>Hi. I'm Rick Morrison.</h1>
                    <span>
                        <em>Front end web developer</em> | Drone videographer |
                        Flow artist
                    </span>
                    <h2>
                        (This site is about the first thing, but you can ask me
                        about the other two)
                    </h2>
                    <div className="primary-button">
                        <a href="#services">Want to Learn More?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
