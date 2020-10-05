import React from 'react';
import classes from './Portfolio.module.css';
import PortfolioCards from '../../components/Portfolio/PortfolioCards/PortfolioCards';
import PortfolioHeader from '../../components/Portfolio/PortfolioHeader/PortfolioHeader';

const Portfolio = props => {
    return (
        <div className={classes.Portfolio}>
                <PortfolioHeader />
                <PortfolioCards />
        </div>
    )
}

export default Portfolio;