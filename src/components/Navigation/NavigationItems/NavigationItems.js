import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                Home
            </NavigationItem>
            <NavigationItem link="/about-me" active>
                About Me
            </NavigationItem>
            <NavigationItem link="/portfolio" active>
                Portfolio
            </NavigationItem>
            <NavigationItem link="/contact" active>
                Contact
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;
