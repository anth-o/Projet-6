import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Principale/Header";
import Banner from "../components/Principale/Banner";
import Footer from "../components/Principale/Footer";
import Collapse from "../components/Principale/Collapse";
import banniere from "../img/banner-apropos.png";
import jsonDataApropos from "../datas/apropos.json"

export default function Apropos() {

    const [apropos, setapropos] = useState([]);

    useEffect(() => {
        setapropos(jsonDataApropos)
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section>
                    <Banner image={banniere} />
                </section>
                <section>
                    {apropos.map((aproposContent, index) => (
                        <Collapse key={index}
                            title={aproposContent.title}
                            content={aproposContent.content}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>            
    )
}