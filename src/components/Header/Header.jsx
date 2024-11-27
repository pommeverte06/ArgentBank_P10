

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css"; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={logo} alt="Argent Bank Logo" />
                </Link>
            </div>
            <nav className="header-nav">
                <Link to="/login" className="header-signin">
                    Sign In
                </Link>
            </nav>
        </header>
    );
};

export default Header;
