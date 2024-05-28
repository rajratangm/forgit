import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import image from '../../assets/images/logo.svg'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={image} alt="Logo" width="26.4" height="40" />
                <span className="company-name">KOIReader</span>
            </div>
            <ul className="nav-links">
                <li><a href="">Solution</a></li>
                <li><a href="#">Integration</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
