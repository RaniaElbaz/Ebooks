import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Layout from "./layouts/layout";
import EbookDetails from "./pages/EbookDetails";
import Ebooks from "./pages/Ebooks";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const getLayout = (path, component) => {
        const authRoutes = ["login"];
        const protectedRoutes = ["/product-overview"];
        if (authRoutes.includes(path)) {
            return component;
        } else if (protectedRoutes.includes(path)) {
            return <ProtectedLayout>{component}</ProtectedLayout>;
        } else {
            return <Layout>{component}</Layout>;
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={getLayout("", <Home />)} />
                <Route path="/login" element={getLayout("login", <Login />)} />
                <Route
                    path="/ebook-products"
                    element={getLayout("ebook-products", <Ebooks />)}
                />
                <Route
                    path="/product-overview/:id"
                    element={getLayout("product-overview/:id", <EbookDetails />)}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
