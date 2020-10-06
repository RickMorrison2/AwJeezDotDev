import React from 'react';

const Portfolio = (props) => {
    return (
        <div className="parallax-content projects-content" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            id="owl-testimonials"
                            className="owl-carousel owl-theme"
                        >
                            <div className="item">
                                <div className="testimonials-item">
                                    <a
                                        href="https://github.com/RickMorrison2/AwJeezDotDev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="img/OnewheelPose.jpg"
                                            alt=""
                                            style={{
                                                objectPosition: '50% 10%',
                                            }}
                                        />
                                    </a>
                                    <div className="divider-bar-orange" />
                                    <div className="text-content">
                                        <h1>AwJeez.dev (This Site)</h1>
                                        <div className="divider-bar-black" />
                                        <h2>
                                            <em>
                                                React with Hooks front end,
                                                serverless Firebase back end.
                                                Mobile and desktop friendly.
                                            </em>
                                        </h2>
                                        <span>October 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-item">
                                    <a
                                        href="https://react-burger-builder-a8da0.web.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="img/BurgerBuilder.png"
                                            alt=""
                                        />
                                    </a>
                                    <div className="divider-bar-orange" />
                                    <div className="text-content">
                                        <h1>React Burger Builder</h1>
                                        <div className="divider-bar-black" />
                                        <h2>
                                            <em>
                                                React with Hooks and Redux front
                                                end, Firebase back end. Mobile
                                                responsive, includes auth to
                                                store and retrieve previous
                                                orders.
                                            </em>
                                        </h2>
                                        <span>September 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-item">
                                    <a
                                        href="https://edisonlive.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="img/EdisonLive.png" alt="" />
                                    </a>
                                    <div className="divider-bar-orange" />
                                    <div className="text-content">
                                        <h1>EdisonLive.com</h1>
                                        <div className="divider-bar-black" />
                                        <h2>
                                            <em>
                                                Vue.js with Vuetify front end,
                                                PHP with Laravel back end.
                                                Mobile friendly.
                                            </em>
                                        </h2>
                                        <span>April 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-item">
                                    <a
                                        href="https://edisoninteractive.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="img/EdisonInteractive.png"
                                            alt=""
                                        />
                                    </a>
                                    <div className="divider-bar-orange" />
                                    <div className="text-content">
                                        <h1>EdisonInteractive.com</h1>
                                        <div className="divider-bar-black" />
                                        <h2>
                                            <em>
                                                Vue.js with Vuetify front end,
                                                Node.js/Express back end. As
                                                always, mobile responsive.
                                            </em>
                                        </h2>
                                        <span>November 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-item">
                                    <a
                                        href="https://github.com/RickMorrison2/StarSearch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="img/StarSearch.jpg"
                                            alt=""
                                            style={{
                                                objectPosition: '50% 3%',
                                            }}
                                        />
                                    </a>
                                    <div className="divider-bar-orange" />
                                    <div className="text-content">
                                        <h1>StarSearch for iOS and Android</h1>
                                        <div className="divider-bar-black" />
                                        <h2>
                                            <em>
                                                React Native front end,
                                                Node.js/Express back end.
                                                Designed exclusively for mobile
                                                devices.
                                            </em>
                                        </h2>
                                        <span>June 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
