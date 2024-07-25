import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authData } from "../../store/reducers/authSlice";

const Header = () => {
    const { user } = useSelector(authData);
    return (
        <header className={styles.header}>
            {user ? (
                <img
                    className={styles.userPfp}
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                />
            ) : (
                <Link to="/login" className={styles.loginLink}>
                    Login
                </Link>
            )}
        </header>
    );
};

export default Header;
