import React from "react";
import { useState } from "react";
import "./Collapse.scss";
import chevrondown from "../../img/chevron-down.png";


function Collapse(props) {

    const [isOpen, setIsOpen] = useState(props.open !== undefined ? props.open: false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    console.log(isOpen)
    return (
        <div className="collapse">
            <h3 onClick={handleClick} className="collapse__title">
                {props.title}
                <img className={isOpen ? "chevron chevron-down": "chevron chevron-up" }
                    src={chevrondown} 
                    alt="afficher le contenu" 
                />
            </h3>
            {isOpen && <div className={`collapse__content ${isOpen ? 'open': 'closed'}`}>{props.content}</div>}
        </div>
    ) 
}

export default Collapse;