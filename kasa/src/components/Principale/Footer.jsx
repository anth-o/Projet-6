import React from "react";
import logoFooter from "../../img/logo-kasa-footer.png";
import "./Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__img" src={logoFooter} alt="logo-kasa" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;