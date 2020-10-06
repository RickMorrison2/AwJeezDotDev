import React from 'react';

const Highlights = (props) => {
    return (
        <div className="service-content" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-text">
                            <h4>A Bit About Me</h4>
                            <div className="line-dec"></div>
                            <p>
                                I like building clean, useful interfaces. I use
                                the latest front-end frameworks (React, Vue,
                                etc.) and back-end tech (Node.js, PHP and
                                serverless Firebase functions).
                                <br />
                                <br />
                                I'd love to find a way to put those skills to
                                work and develop new ones. Think we could work
                                together? Scroll to check out my portfolio or
                                drop me a line.
                            </p>
                            <div className="primary-button">
                                <a href="#portfolio">My Work</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="service-item">
                                    <h4>Full-Stack Skill Set</h4>
                                    <div className="line-dec"></div>
                                    <p>
                                        Learned full MERN stack through Hack
                                        Reactor @ Galvanize, and solidified both
                                        front- and back-end skills through
                                        professional full-stack development
                                        experience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-item">
                                    <h4>Mobile-First Developer</h4>
                                    <div className="line-dec"></div>
                                    <p>
                                        Focused on developing applications with
                                        responsive, mobile-friendly design,
                                        including programs built for the web as
                                        well as Android and iPhone apps created
                                        with React Native.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-item">
                                    <h4>Agile Team Member</h4>
                                    <div className="line-dec"></div>
                                    <p>
                                        Experienced with professional agile
                                        development practices to create
                                        iterative releases in rapid response to
                                        ever-changing customer and business
                                        requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-item">
                                    <h4>Perpetual Learner</h4>
                                    <div className="line-dec"></div>
                                    <p>
                                        Never content to just know enough to get
                                        by, but determined to constantly learn
                                        the latest and greatest technologies
                                        through self-study and on-the-job
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
