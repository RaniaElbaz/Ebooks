import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <NavBar />
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;
