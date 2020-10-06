import React, { useState, useEffect } from 'react';
import Input from './Input';
import axios from 'axios';
import ResumePDF from '../../pdf/Resume.pdf';

const Contact = (props) => {
    const [contactForm, setContactForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your Email Address',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        subject: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Subject',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        message: {
            elementType: 'textarea',
            elementConfig: {
                type: 'textarea',
                placeholder: 'Message',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const formHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElement in contactForm) {
            formData[formElement] = contactForm[formElement].value;
        }

        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
                    action: 'submit',
                })
                .then((token) => {
                    axios({
                        method: 'POST',
                        headers: {
                            crossorigin: 'true',
                        },
                        url: `https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${token}`,
                    }).then((res) => {
                        if (res.data.success) {
                            axios({
                                method: 'POST',
                                url: `https://us-central1-awjeezdev.cloudfunctions.net/sendContactEmail?name=${formData.name}&email=${formData.email}&subject=${formData.subject}&message=${formData.message}`,
                            }).then((res) => {
                                if (res.data.msg === 'success') {
                                    setFormSubmitted(true);
                                } else if (res.data.msg === 'fail') {
                                    alert('Message failed to send.');
                                }
                            });
                        } else {
                            alert('Google ReCaptcha failed. Nice try, bot!');
                        }
                    });
                });
        });
    };

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    };

    const inputChangedHandler = (event, inputId) => {
        const updatedForm = { ...contactForm };
        const updatedFormElement = { ...updatedForm[inputId] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedForm[inputId] = updatedFormElement;

        let formIsValid = true;
        for (let inputId in updatedForm) {
            formIsValid = updatedForm[inputId].valid && formIsValid;
        }
        setContactForm(updatedForm);
        setFormIsValid(formIsValid);
    };

    const formElementsArray = [];
    for (let key in contactForm) {
        formElementsArray.push({ id: key, config: contactForm[key] });
    }

    let form = (
        <React.Fragment>
            <form id="contact" onSubmit={formHandler}>
                {formElementsArray.map((el) => (
                    <Input
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        invalid={!el.config.valid}
                        shouldValidate={el.config.validation}
                        touched={el.config.touched}
                        changed={(event) => inputChangedHandler(event, el.id)}
                    />
                ))}
                <button
                    className={
                        formIsValid
                            ? 'button-enabled g-recaptcha'
                            : 'button-disabled g-recaptcha'
                    }
                    data-sitekey=""
                    data-callback="formHandler"
                    data-action="submit"
                    disabled={!formIsValid}
                >
                    Send Message
                </button>
                <p>
                    This site is protected by reCAPTCHA and the Google&nbsp;
                    <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="https://policies.google.com/privacy"
                    >
                        Privacy Policy
                    </a>{' '}
                    and&nbsp;
                    <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="https://policies.google.com/terms"
                    >
                        Terms of Service
                    </a>{' '}
                    apply.
                </p>
            </form>
        </React.Fragment>
    );

    if (formSubmitted) {
        form = (
            <h1>
                Thank you for messaging me. I will reply back as quickly as I
                can.
            </h1>
        );
    }

    const onSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const email = profile.getEmail();
        setIsLoggedIn(true);
        axios({
            method: 'POST',
            url: `https://us-central1-awjeezdev.cloudfunctions.net/sendResumeRequestEmail?email=${email}`,
        }).then((res) => {
            if (res.data.msg === 'success') {
                console.log('Successfully sent message regarding signin');
            } else if (res.data.msg === 'fail') {
                console.log('Did not send message; an error occurred');
            }
        });
    };

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2
                .init({
                    client_id:
                        '349723966197-2j1ikk037dj0q1r0ts3la4qngv11gjne.apps.googleusercontent.com',
                })
                .then(() => {
                    window.gapi.signin2.render('signInButton', {
                        width: '200%',
                        height: 75,
                        longtitle: false,
                        onsuccess: onSignIn,
                    });
                });
        });
    }, []);

    const signOut = () => {
        window.gapi.auth2
            .getAuthInstance()
            .signOut()
            .then(setIsLoggedIn(false));
    };

    let resumeRequest = (
        <React.Fragment>
            <h1>
                To download a PDF copy of my latest resume, please log in below
                with Google. You'll be learning a lot about me, and I'd like to
                learn a little about you in return.
            </h1>
            <div id="signInButton">
                Please reload the page to sign in to Google again.
            </div>
        </React.Fragment>
    );

    if (isLoggedIn) {
        resumeRequest = (
            <React.Fragment>
                <h1>
                    Thank you for logging in. Please click the button below to
                    download my resume.
                </h1>
                <a
                    href={ResumePDF}
                    download="Rick_Morrison_Web_Developer_Resume_Oct_2020.pdf"
                >
                    <button>Download Resume</button>
                </a>
                <br />
                <button onClick={signOut}>Sign Out</button>
            </React.Fragment>
        );
    }

    return (
        <div className="parallax-content contact-content" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-form">
                            <div className="row">{form}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="request-resume">{resumeRequest}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
