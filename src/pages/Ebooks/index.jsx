import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { API_getEbooksList } from "../../network/ebooks";
import EbookCard from "../../components/EbookCard";

const Ebooks = () => {
    const [ebooks, setEbooks] = useState(null);
    const [loading, setLoading] = useState(true);

    const getEbooks = async () => {
        try {
            setLoading(true);
            const response = await API_getEbooksList();
            console.log("get ebooks", response);
            setEbooks(response.data.data);
        } catch {
            alert("failed to get data");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getEbooks();
    }, []);

    return (
        <main className={styles.ebooksPage}>
            <h1>E-Books</h1>
            <section className={styles.ebooksList}>
                {ebooks?.map((ebook) => (
                    <EbookCard key={ebook.id} ebook={ebook} />
                ))}
            </section>
        </main>
    );
};

export default Ebooks;
