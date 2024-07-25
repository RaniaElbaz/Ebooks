import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const NavButton = ({ path, label }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive, isPending }) =>
                isPending ? styles.navLink : isActive ? styles.activeLink : ""
            }
        >
            {label}
        </NavLink>
    );
};

export default NavButton;
