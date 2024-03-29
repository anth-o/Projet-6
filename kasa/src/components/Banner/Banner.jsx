import React from "react";
import "./Banner.scss"

function Banner(props) {
    return (
        <div className="banner">
            <h1 className="banner__title">{props.title}</h1>
            <img className="banner__img" src={props.image} alt="Bannière Kasa" title={props.title} />
        </div>
    )
}

export default Banner;