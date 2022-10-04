import React, { useState } from 'react';
import "./header.css";



const Header = () => {

    /*Toggle menu*/

    const[Toggle, showMenu] = useState(false);

    return (
        <header className="Header">
            <nav className="nav container">

                <a href="index.html" className="nav__logo">
                    Ville
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav-menu"}>
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#Home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#About" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#Porfolio" className="nav__link">
                                <i className="uil uil-image nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#Experience" className="nav__link">
                                <i className="uil uil-layers nav__icon"></i> Experience
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#Contact" className="nav__link">
                                <i className="uil uil-envelope nav__icon"></i> Contact me
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