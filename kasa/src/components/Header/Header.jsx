import React from "react";
import "./Header.scss"
import logo from "../../img/logo-kasa.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Kasa" className="header-logo" />
            </div>
            <nav className="header__navbar">
                <ul>
                    <li className="header__navbar__link">
                        <Link title="Accueil" to="/home">
                            Accueil
                        </Link>
                    </li>
                    <li className="header__navbar__link">
                        <Link title="A-Propos" to="/a-propos">
                            A Propos                    
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header