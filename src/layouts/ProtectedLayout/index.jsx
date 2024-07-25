import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const ProtectedLayout = ({ children }) => {
    return (
        <>
            <Header />
            <NavBar />
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
};

export default ProtectedLayout;
