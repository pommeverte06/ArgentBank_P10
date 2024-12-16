import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { login as apiLogin, getUserProfile } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiLogin({ email, password });
      console.log("Réponse API après login :", data);

      const userProfile = await getUserProfile(data.token);
      dispatch(login({ token: data.token, userData: userProfile, rememberMe }));

      console.log("Utilisateur connecté, redirection vers /profile");
      navigate("/profile"); 
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {/* <Header /> */}
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            {error && <p className="login-error">{error}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
