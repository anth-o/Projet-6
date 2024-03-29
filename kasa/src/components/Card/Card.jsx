import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article className="card" key={props.id}>
            <Link to={`/fiche-logement/${props.id}`}>
                <img className="card__img" src={props.cover} alt={props.title} title={props.title} />
                <div className="card__gradient"></div>
                <h2 className="card__title">{props.title}</h2>
            </Link>
        </article>
    )
}

export default Card;