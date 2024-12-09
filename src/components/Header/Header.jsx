import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import logo from "../../assets/logo.png";
import Avatar from "../Avatar/Avatar";
import "./header.css";

const Header = () => {
  const user = useSelector((state) => state.user.userData);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirige vers la page d'accueil après déconnexion
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
      </div>
      <nav className="header-nav">
        {isLoggedIn && user ? (
          <div className="header-user">
            <Avatar />
            <Link to="/profile" className="header-user-name">
              {user.firstName}
            </Link>
            <button className="header-signout" onClick={handleLogout}>
              <i className="fa fa-right-from-bracket" aria-hidden="true"></i>{" "}
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="header-signin">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
