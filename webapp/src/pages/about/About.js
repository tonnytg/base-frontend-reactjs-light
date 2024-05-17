import React from 'react';
import './About.css';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function About() {
    return (
        <>
            <div className="App">
                <div className="d-flex flex-column">
                    <div className="p-2">
                        <Header />
                    </div>
                    <div className="p-2">
                        <h1> About </h1>
                    </div>
                    <div className="p-2">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;