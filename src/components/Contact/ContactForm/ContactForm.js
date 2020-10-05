import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './ContactForm.module.css';
import axios from 'axios';

const ContactForm = (props) => {
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

    const resetForm = () => {
        console.log('resetting...');
        // document.getElementById('form').reset();
        setContactForm({});
    };

    const formHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElement in contactForm) {
            formData[formElement] = contactForm[formElement].value;
        }
        // console.log('formData: ', formData);
        // console.log(
        //     'env variables: ',
        //     process.env.REACT_APP_GMAIL_USER,
        //     process.env.REACT_APP_GMAIL_PASS
        // );
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
                                // url: 'http://localhost:5000/sendEmail',
                                // headers: {
                                //     crossorigin: 'true',
                                // },
                                url: `https://us-central1-awjeezdev.cloudfunctions.net/sendContactEmail?name=${formData.name}&email=${formData.email}&subject=${formData.subject}&message=${formData.message}`,
                                // data: {
                                //     name: formData.name,
                                //     email: formData.email,
                                //     subject: formData.subject,
                                //     message: formData.message,
                                // },
                            }).then((res) => {
                                if (res.data.msg === 'success') {
                                    // resetForm();
                                    // alert('Message Sent!');
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
            <h1>Thanks again for visiting my site.</h1>
            <h3>
                Feel free to fill out the form below to message me directly.
            </h3>
            <form id="form" onSubmit={formHandler}>
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
                    className="g-recaptcha"
                    data-sitekey=""
                    data-callback="formHandler"
                    data-action="submit"
                    disabled={!formIsValid}
                >
                    Submit
                </button>
                <p>
                    This site is protected by reCAPTCHA and the Google
                    <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href="https://policies.google.com/privacy"
                    >
                        Privacy Policy
                    </a>{' '}
                    and
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
                Thank you for sending me your message! I will reply back as
                quickly as I can.
            </h1>
        );
    }

    return <div className={classes.Form}>{form}</div>;
};

export default ContactForm;
