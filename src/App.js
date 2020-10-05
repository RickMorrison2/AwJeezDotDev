import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.css';
import AboutMe from './containers/AboutMe/AboutMe';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';

const App = (props) => {
    let routes = (
        <Switch>
            <Route path="/about-me" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Homepage} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <ParallaxProvider>
            <div className="App">
                <Layout>{routes}</Layout>
            </div>
        </ParallaxProvider>
    );
};

export default withRouter(App);
