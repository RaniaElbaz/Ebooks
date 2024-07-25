import React from "react";
import styles from "./index.module.css";
import NavButton from "../NavButton";

const navLinks = [
    { label: "home", path: "/" },
    { label: "Ebooks", path: "/ebook-products" },
];
const NavBar = () => {
    return (
        <nav className={styles.nav}>
            {navLinks.map((nav, index) => (
                <NavButton key={index} label={nav.label} path={nav.path} />
            ))}
        </nav>
    );
};

export default NavBar;
