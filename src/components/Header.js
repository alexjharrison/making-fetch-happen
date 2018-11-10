import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ pageName }) => {
    return (
        <div className="header">
            <Link to="/"><h1>logo goes here</h1></Link>
            <nav>
                <ul>
                    <li><Link to="/">IN-HOME TRAINING</Link></li>
                    <li><Link to="/">REGISTER</Link></li>
                    <li><Link to="/">ABOUT</Link></li>
                    <li><Link to="/">CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Header;