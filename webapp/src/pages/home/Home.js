import React from 'react';
import './Home.css';

import Header from "../../components/header/Header";
import MainContent from "../../components/mainContent/MainContent";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <div className="App">
                <div className="d-flex flex-column">
                    <div className="p-2">
                        <Header />
                    </div>
                    <div className="p-2">
                        <MainContent />
                    </div>
                    <div className="p-2">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
