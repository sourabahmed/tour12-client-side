import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-property">
                    <h2>Tour12</h2>
                    <p>We are one of the best agency for travell world wide. We are doing this job for last 10 years. Tour12 is one of the reliable agency.</p>
                    <h3>Follew us</h3>
                    <div className="fs-1">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab mx-4 fa-instagram-square"></i>
                        <i class="fab fa-twitter-square"></i>
                    </div>
                </div>
                <div className="footer-property">
                    <h2>Contact us</h2>
                    <h6>Phone: +45253333</h6>
                    <h6>Email: tour12@gmail.com</h6>
                    <h6>Location: 45/3, Lonodn, UK</h6>
                </div>
                <div className="footer-property">
                    <h2>Support</h2>
                    <h6>About us</h6>
                    <h6>Contact us</h6>
                    <h6>Packages</h6>
                    <h6>Destination</h6>
                    <h6>Our Blogs</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;