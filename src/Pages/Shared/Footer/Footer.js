import React from 'react';
import Brand from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div>
                    <img style={{ width: '100px' }} src={Brand} alt="" />
                </div>
                <div className="footer-category">
                    <div>
                        <p>About Online Food</p>
                        <p>Read our blog</p>
                        <p>Sign up to delivery</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-muted">Copyright &copy; 2021 online food</p>
                <div className="footer-category ps-5">
                    <p>Privacy Policy.</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;