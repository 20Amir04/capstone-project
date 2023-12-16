import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-top">
            <div className="logo">
                <img src="/images/tort.svg" alt="" className="logo-image" />
                <p className="logo-text">Тортики</p>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#selection" className="nav-link">Фотогалерея</a></li>
                    <li className="nav-item"><a href="#reviews" className="nav-link">Відгуки</a></li>
                    <li className="nav-item"><a href="#footer" className="nav-link">Контакти</a></li>
                </ul>
            </nav>
        </div>  
    );
};

export default Nav;
