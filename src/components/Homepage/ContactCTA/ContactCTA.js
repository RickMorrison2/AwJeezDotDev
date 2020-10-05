import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './ContactCTA.module.css';
import { Button } from '@material-ui/core';

const ContactCTA = (props) => {
    const history = useHistory();

    const contactButtonClickedHandler = () => {
        history.push('/contact');
    };
    return (
        <div className={classes.CTA}>
            <h1>Like What You See?</h1>
            <p>
                Reach out and I'll get back to you as soon as
                possible.
            </p>
            <Button variant="outlined" onClick={contactButtonClickedHandler}>
                Contact
            </Button>
        </div>
    );
};

export default ContactCTA;
