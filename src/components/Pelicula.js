import React from "react";
import '../estilos/General.css'

const Pelicula =()=>{
    return (
        <>
        <a href="detalle.html">
            <div className="media-element">
                <img src={require("../img/arrival.png")} alt=""/>
                <div className="ml-3">
                    <h6>Pelicula</h6>
                    <p>Año de salida</p>
                </div>
            </div>
        </a>
        </>
    );
}

export default Pelicula;