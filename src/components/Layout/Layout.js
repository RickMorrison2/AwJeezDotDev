import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
    let history = useHistory();

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerOpen(false);
    };
    const sideDrawerOpenHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };

    let attachedClasses = [classes.Layout];

    switch (history.location.pathname) {
        case '/':
            attachedClasses.push(classes.Homepage);
            break;
        case '/about-me':
            attachedClasses.push(classes.AboutMe);
            break;
        case '/portfolio':
            attachedClasses.push(classes.Portfolio);
            break;
        case '/contact':
            attachedClasses.push(classes.Contact);
            break;
        default:
            break;
    }

    return (
        <React.Fragment>
            <div className={attachedClasses.join(' ')}>
                <header className={classes.Header}>
                    <Toolbar drawerToggleClicked={sideDrawerOpenHandler} />
                    <SideDrawer
                        open={sideDrawerOpen}
                        closed={sideDrawerClosedHandler}
                    />
                </header>
                <main className={classes.Content}>{props.children}</main>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Layout;
