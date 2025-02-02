import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default Toolbar;
