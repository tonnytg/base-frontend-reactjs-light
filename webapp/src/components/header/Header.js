// Header
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="header">
                <h1>WebApp</h1>
                <div className="links-right">
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </div>
    );
}

export default Header;