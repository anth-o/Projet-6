import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";
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
                        <div className="collapse-apropos">
                            <Collapse 
                                key={index}
                                title={aproposContent.title}
                                content={aproposContent.content}
                            />
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>            
    )
}