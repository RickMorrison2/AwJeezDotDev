import React from 'react';
import classes from './PortfolioHeader.module.css';

const PortfolioHeader = props => {
    return (
        <div className={classes.Header}>
            <h1>The following is a selection of projects I've created:</h1>
        </div>
    );
}

export default PortfolioHeader;