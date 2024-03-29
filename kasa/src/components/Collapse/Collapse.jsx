import React from "react";
import { useState } from "react";
import "./Collapse.scss";
import chevrondown from "../../img/chevron-down.png";


function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div onClick={handleClick} className={`collapse ${isOpen ? "open" : ""}`}>
            <h3 className="collapse__title" onClick={handleClick}>
                {props.title}
                <img className={isOpen ? "chevron chevron-down": "chevron chevron-up" }
                    src={chevrondown} 
                    alt="afficher le contenu" 
                />
            </h3>
            <div className="collapse__content">
                <div className="collapse__wrapper">{isOpen &&props.content}</div>
            </div>
        </div>
    ) 
}

export default Collapse;