import React from "react";
import { useState } from "react";
import chevronnext from "../../img/chevronnext.png";
import chevronprev from "../../img/chevronprev.png";
import "./Slideshow.scss"



function Slideshow(props) {

    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {
        setSlideIndex(slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1);
    };

    const nextSlide = () => {
        setSlideIndex(slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1);
    };

    return (
        <div className="slider">
            {props.pictures.length > 0 && props.pictures.map((picture, index) => 
				<div key={index}>
					<img className={(index === slideIndex) ? `slider__img slider__img-${index} slider__img-show` : `slider__img slider__img-${index}`}
                    src={picture} 
                    alt={props.title} 
                    title={props.title}/>
					{props.pictures.length > 1 && (
                        <div className="chevron-compteur">
                            <img
                                className="chevron-prev"
                                src={chevronprev}
                                alt="image précédente"
                                onClick={prevSlide}
                            />
                            <div>
                                <p className="compteur">{slideIndex + 1} / {props.pictures.length}</p>
                            </div>
                            <img
                                className="chevron-next"
                                src={chevronnext}
                                alt="image suivante"
                                onClick={nextSlide}
                            />
                        </div>
					)}
				</div>
			)}
        </div>
    )
}

export default Slideshow;