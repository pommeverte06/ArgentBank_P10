import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { login as apiLogin } from "../services/api";

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
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
