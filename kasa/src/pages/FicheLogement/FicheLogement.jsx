import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import jsonData from "../../datas/logements.json";
import etoilerouge from "../../img/etoilerouge.png";
import etoilegrise from "../../img/etoilegrise.png";
import "./FicheLogement.scss";

export default function FicheLogement() {

    const idLogement = useParams("id").id;

    const navigate = useNavigate();

    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const selectedLogement = jsonData.find(logement => logement.id === idLogement) || null;
        if (selectedLogement === null) {
            return navigate("/erreur");
        } else {
            setLogement(selectedLogement);
        }
    }, [idLogement, navigate]);
		
    const etoiles = () => {
        const etoilesTab = [];
        for (let i = 1; i <= 5; i++) {
            const etoileImg = i <= logement.rating ? etoilerouge : etoilegrise;
            etoilesTab.push(
                <img
                    key={i}
                    src={etoileImg}
                    alt="Notation du logement"
                />
            )
        }
        return etoilesTab;
    }

    return (
        <main>
            {logement && (
                <div>
                    <Header />
                    <Slideshow 
                        pictures={logement.pictures}
                        title={logement.title}
                        />
                    <section className="infoLogement">
                        <div>
                            <h2 className="infoLogement__title">{logement.title}</h2>
                            <p className="infoLogement__location">{logement.location}</p>
                            <div className="infoLogement__tag">
                                {logement.tags.map((tag,index) =>
                                    <p key={index}>{tag}</p>
                                )}
                            </div>
                        </div>
                        <div className="infoLogement__hostRating">
                            <div className="infoLogement__host">
                                <p>{logement.host.name.split(" ")[0]}<br />
                                   {logement.host.name.split(" ")[1]}
                                </p>
                                <img src={logement.host.picture} alt="Photo de l'hôte"/>
                            </div>
                            <div className="infoLogement__rating">
                                {etoiles()}
                            </div>
                        </div>
                    </section>
                    <section className="collapses-logement">
                        <div className="collapses-logement__collapse">
                            <Collapse 
                                title={"Description"}
                                content={logement.description}
                            />
                        </div>
                        <div className="collapses-logement__collapse">
                            <Collapse 
                                title={"Équipements"}
                                content={logement.equipments.map((equipement, index) => (
                                    <p key={index}>{equipement}</p>
                                ))}
                            />
                        </div>
                    </section>
                    <Footer />
            </div>
            )}
        </main>
    )
}