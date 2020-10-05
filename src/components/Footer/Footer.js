import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterContent}>
                <em>
                    Copyright &copy; Rick Morrison, {new Date().getFullYear()}
                </em>
            </div>
        </footer>
    );
};

export default Footer;
