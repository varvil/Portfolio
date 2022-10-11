import React, { useState } from 'react';
import "./header.css";



const Header = () => {

    /*Toggle menu*/

    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("home");

    return (
        <header className="Header">
            <nav className="nav container">

                <a href="index.html" className="nav__logo">
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav-menu"}>
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-image nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-layers nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualifications" onClick={() => setActiveNav('#qualifications')} className={activeNav === "#qualifications" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-envelope nav__icon"></i> Qualification
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header