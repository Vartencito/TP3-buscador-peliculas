import React from "react";
import '../estilos/General.css'

const Carousel =()=>{
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src={require("../img/ares.jfif")} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={require("../img/arrival.png")} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src={require("../img/strangerthings.jpg")} alt="Third slide"/>
                    </div>
                </div>
                <a classNameName="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}

export default Carousel;