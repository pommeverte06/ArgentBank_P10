import React from "react";
import logo from "../assets/images/logo.png"; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="/">
                    <img src={logo} alt="argent bank logo" />
                </a>
            </div>
            <nav className="header-nav">
                <a href="/login" className="header-signin">Sign In</a>
            </nav>
        </header>
    );
};

export default Header;
