import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Principale/Header";
import Footer from "../components/Principale/Footer";
import "./Erreur.scss"

export default function Erreur() {
    return (
        <div>
            <Header />
            <main>
                <section className="erreur">
                    <h2 className="erreur__title">404</h2>
                    <p className="erreur__text">Oups! La page que vous demandez n'existe pas.</p>
                    <Link className="erreur__link" to="/">Retourner sur la page d'accueil</Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}