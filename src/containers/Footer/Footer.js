import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="primary-button">
                            <a href="#home">Back To Top</a>
                        </div>
                        <p>
                            Copyright &copy; {new Date().getFullYear()} Rick
                            Morrison
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
