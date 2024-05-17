// Footer
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">

            <div className="menu-footer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                {/*add bar*/}
                <div className="bar" />
                <ul>
                    <li>LideraTech</li>
                    <li>Training and Courses</li>
                    <li>Brazil</li>
                </ul>
            </div>

            <div>
                <p>@2024 by <a href="https://github.com/tonnytg">Antonio Thomacelli</a></p>
            </div>

        </div>
    );
}

export default Footer;