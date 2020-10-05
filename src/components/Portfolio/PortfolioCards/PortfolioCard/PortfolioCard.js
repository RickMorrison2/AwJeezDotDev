import React from 'react';
import classes from './PortfolioCard.module.css';

const PortfolioCard = (props) => {
    return (
        <div className={classes.Card}>
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <div className={classes.ImgContainer}>
                <a
                    href={props.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={props.imgSrc}
                        height="100%"
                        width="100%"
                        alt={props.altText}
                    />
                </a>
                <p className={classes.Description}>{props.description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
