import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { login as apiLogin } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiLogin({ email, password });
      dispatch(login(data));
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
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
