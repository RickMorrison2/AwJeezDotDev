import React from 'react';

const Navbar = (props) => {
    return (
        <div className="fixed-side-navbar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#home">
                        <span>Intro</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">
                        <span>About Me</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                        <span>Portfolio</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">
                        <span>Contact/Resume</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
