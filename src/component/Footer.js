import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
        <span className='footer-text'>© Copyright 2022 Jharna Khatun. All rights reserved.</span>
        <div className="social-link">
        <span  className='fa-style'><FaFacebook/></span>
        <span className='fa-style'><FaInstagram/></span>
        <span className='fa-style'><FaTwitter/></span>
        <span className='fa-style'><FaLinkedin/></span>
        </div>
            
        </div>
    );
};

export default Footer;