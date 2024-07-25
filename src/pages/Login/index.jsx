import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../store/reducers/authSlice";
import styles from "./index.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email == "test@gmail.com" && password == "12345678") {
            dispatch(setUser({ email }));
            dispatch(
                setToken(
                    "eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhYmxlX2lkIjo5LCJhdXRoZW50aWNhYmxlX3R5cGUiOiJTcHJlZTo6VXNlciIsImRldmljZSI6MTQzLCJjcmVhdGVkX2F0IjoxNjczODcxNTA5LCJleHAiOjQ4Mjk1NjY3MDl9.PlNelre_ehGa3GruTipCZx1PxkTrHbkxp61ozwIqf9g"
                )
            );
            navigate(-1);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
