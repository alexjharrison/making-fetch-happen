import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {
    return (
        <div className="header">
            <Link to="/"><h1>logo goes here</h1></Link>
            <nav>
                <ul>
                    <li><Link to="/in-home-training">IN-HOME TRAINING</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Header;