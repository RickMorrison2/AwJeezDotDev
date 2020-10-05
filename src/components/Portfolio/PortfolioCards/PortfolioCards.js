import React, { useState } from 'react';
import classes from './PortfolioCards.module.css';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import OnewheelPose from '../../../assets/images/OnewheelPose.jpg';
import BurgerBuilder from '../../../assets/images/BurgerBuilder.png';
import EdisonLive from '../../../assets/images/EdisonLive.png';
import EdisonInteractive from '../../../assets/images/EdisonInteractive.png';
import StarSearch from '../../../assets/images/StarSearch.jpg';

const PortfolioCards = (props) => {
    const [cardList, setCardList] = useState([
        {
            title: 'AwJeez.Dev (This Site)',
            date: 'October 2020',
            imgSrc: OnewheelPose,
            altText: "Aw Jeez, it's this site!",
            description:
                'Constructed in React with a serverless Firebase-function backend, using all original assets. Designed for both mobile and desktop.',
            linkTo: '/',
        },
        {
            title: 'React Burger Builder',
            date: 'September 2020',
            imgSrc: BurgerBuilder,
            altText: "It's a little site where you build a burger!",
            description:
                'Built using React with Hooks and Redux and a Firebase backend, this responsive app allows you to customize and "order" a burger. Includes authorization to sign up/login and see previous orders.',
            linkTo: 'https://react-burger-builder-a8da0.web.app',
        },
        {
            title: 'EdisonLive.Com',
            date: 'April 2020',
            imgSrc: EdisonLive,
            altText:
                'A robust marketing site for a video conferencing platform.',
            description:
                'A collaborative team effort, this site was built using Vue.js with Vuetify on the front end with a PHP backend.',
            linkTo: 'https://edisonlive.com/',
        },
        {
            title: 'EdisonInteractive.Com',
            date: 'November 2019',
            imgSrc: EdisonInteractive,
            altText:
                'My first site, a marketing site for my employer at the time.',
            description:
                'My first professional solo front-end project, this site was also built using Vue.js with Vuetify, along with a simple Node.js/Express back end.',
            linkTo: 'https://edisoninteractive.com/',
        },
        {
            title: 'StarSearch',
            date: 'June 2019',
            imgSrc: StarSearch,
            altText:
                'My first mobile app, a database that finds actors and movies in common.',
            description:
                'This mobile application was built using React Native. It reaches out to TheMovieDB.org and returns a list of movies and shows that two actors have been in together.',
            linkTo: 'https://github.com/RickMorrison2/StarSearch/',
        },
    ]);

    let cards = [];

    for (let card in cardList) {
        cards.push(
            <div>
                <PortfolioCard
                    key={card}
                    title={cardList[card].title}
                    date={cardList[card].date}
                    imgSrc={cardList[card].imgSrc}
                    altText={cardList[card].altText}
                    description={cardList[card].description}
                    linkTo={cardList[card].linkTo}
                />
            </div>
        );
    }

    return <div className={classes.Cards}>{cards}</div>;
};

export default PortfolioCards;
