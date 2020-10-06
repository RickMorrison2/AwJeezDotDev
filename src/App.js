import React from 'react';
import Intro from './containers/Intro/Intro';
import Highlights from './containers/Highlights/Highlights';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import Navbar from './containers/Navbar/Navbar';
// import AboutMe from './containers/AboutMe/AboutMe';
import Footer from './containers/Footer/Footer';
import './css/templatemo-main.css';
import './css/owl-carousel.css';
import './css/hero-slider.css';
import './css/fontAwesome.css';
import './css/bootstrap.min.css';

const App = (props) => {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Highlights />
            <Portfolio />
            {/* <AboutMe /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
