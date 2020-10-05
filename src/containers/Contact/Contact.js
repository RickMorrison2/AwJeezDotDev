import React from 'react';
import classes from './Contact.module.css';
import ContactBackground from '../../components/Contact/ContactBackground/ContactBackground'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'

const Contact = props => {
    return (
        <div className={classes.Contact}>
            <ContactBackground />
            <ContactForm />
        </div>
    )
}

export default Contact;