import React from "react";
// import '../estilos/General.css'
import '../estilos/Categoria.css'

const Categroria =()=>{
    return (
        <>
        <div className="row">
            <div className="mt-1 ml-4 mr-4">
                <h2 className="section-title popular" >Popular</h2>
            </div>
            <div className="mt-2">
                <div className="category-head">
                    <ul>
                        <div className="category-title active streaming" id="culture">
                            <li>Streaming</li>
                            <span><i className="fas fa-theater-masks"></i></span>
                        </div>
                        <div className="category-title television" id="politics">
                            <li>Television</li>
                            <span><i className="fas fa-landmark "></i></span>
                        </div>
                        <div className="category-title alquiler" id="finance">
                            <li>Alquiler</li>
                            <span><i className="fas fa-chart-area "></i></span>
                        </div>
                        <div className="category-title cines" id="business">
                            <li>Cines</li>
                            <span><i className="fas fa-coins"></i></span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Categroria;