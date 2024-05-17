import React from 'react';
import './Blog.css';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Blog() {
    return (
        <>
            <div className="App">
                <div className="d-flex flex-column">
                    <div className="p-2">
                        <Header />
                    </div>
                    <div className="p-2">
                        <h1> Blog </h1>
                    </div>
                    <div className="p-2">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
