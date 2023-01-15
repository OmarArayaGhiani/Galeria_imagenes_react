import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ImagesMain from '../Js/DataImagesMain'
import '../css/Carousel.css'

const ImagesCarousel = () => {
    return (
        <div>
            <div className="subTitle mx-auto">
                <h2 className="pt-5 text-center">Cartas más utilizadas</h2>
                <hr className="border border-4 border-primary rounded" />
            </div>
            <Carousel variant="dark" interval={6500}>
                {ImagesMain.map((element) => (
                    <Carousel.Item>
                        <a id={element.id} href={element.link} target="_blank" className="text-decoration-none">
                            <div className='mb-5'>
                                <div key={element.key} className="justify-content-center carouselCard align-items-center px-5 my-4 mx-auto">
                                    <img src={element.src} alt={element.name} className="mb-3" />
                                    <div className='d-flex flex-column'>
                                        <h2 className="mt-4 mt-xxl-0">{element.name}</h2>
                                        <hr className="border border-4 border-primary rounded mb-5" />
                                        <p><span className="fw-bold">Habilidad:</span> {element.text}</p>
                                        <p><span className="fw-bold">Clase:</span> {element.class}</p>
                                        <p><span className="fw-bold">Tipo:</span> {element.type}</p>
                                        {
                                            element.race ? (
                                                <p><span className="fw-bold">Raza:</span> {element.race}</p>
                                            ) : ""
                                        }
                                        <p><span className="fw-bold">Rareza:</span> {element.rarity}</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ImagesCarousel;