import React, { useEffect, useState } from "react";
import { API_getEbookDetails } from "../../network/ebooks";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { authData } from "../../store/reducers/authSlice";
import styles from "./index.module.css";

const EbookDetails = ({}) => {
    const [eBook, setEBook] = useState(null);
    const [selectedPage, setSelectedPage] = useState(1);

    const { id } = useParams();
    const { user, token } = useSelector(authData);

    const navigate = useNavigate(-1);

    const getEbookDetails = async () => {
        try {
            const response = await API_getEbookDetails(id, token);
            console.log(response);
            setEBook(response.data.data[0]);
        } catch {
            console.log("failed to get data");
        } finally {
        }
    };
    useEffect(() => {
        if (user) {
            getEbookDetails();
        } else {
            navigate(-1);
        }
    }, []);

    if (!eBook) return <div>Failed to get Ebook</div>;
    else
        return (
            <div className={styles.ebooksDetailsPage}>
                <h1>{eBook.attributes.name}</h1>
                <main className={styles.mainWrapper}>
                    <aside className={styles.aside}>
                        <h2>Pages</h2>
                        <section>
                            {Array.from({
                                length: eBook.attributes.book.num_of_pages,
                            }).map((_, index) => (
                                <button
                                    className={
                                        selectedPage == index + 1
                                            ? styles.activePage
                                            : styles.page
                                    }
                                    onClick={() => setSelectedPage(index + 1)}
                                >
                                    Page {index + 1}
                                </button>
                            ))}
                        </section>
                        <h2>Bookmark</h2>
                    </aside>
                    <section className={styles.detailsWrapper}>
                        <img src={eBook.attributes.book.image_url} />
                    </section>
                </main>
            </div>
        );
};

export default EbookDetails;
