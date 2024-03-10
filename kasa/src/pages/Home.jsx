import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Principale/Header"
import Footer from "../components/Principale/Footer"
import Banner from "../components/Principale/Banner"
import Card from "../components/Principale/Card"
import banniere from "../img/banner-home.png"
import jsonData from "../datas/logements.json"
import "./Home.scss"

export default function Home() {

    const [logements, setLogements] = useState([]);

    useEffect(() => {
        setLogements(jsonData)
    }, []);



    return (
        <div>
            <Header />
            <main>
            <Banner title={"Chez vous, partout et ailleurs"} 
                    image={banniere} 
            />
        <section>
            <div className="listeLogement">
            {logements.map(logement => (
                <Card
                    key={logement.id}
                    cover={logement.cover}
                    title={logement.title}                
            />
            ))}
            </div>
        </section>
            </main>
            <Footer />
        </div>
    )
}