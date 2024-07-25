import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authData } from "../../store/reducers/authSlice";

const EbookCard = ({ ebook }) => {
    const { user } = useSelector(authData);
    const navigate = useNavigate();

    const goToEbookDetails = () => {
        if (user) {
            navigate(`/product-overview/${ebook.id}`);
        } else {
            navigate("/login");
        }
    };

    return (
        <section key={ebook.id} className={styles.ebookCard}>
            <img src={"..."} alt="E-book Cover Image" />
            <h2>{ebook.attributes.name}</h2>
            <text>USD {ebook.attributes.price}</text>
            <button className={styles.payBtn} onClick={goToEbookDetails}>
                Pay
            </button>
        </section>
    );
};

export default EbookCard;
