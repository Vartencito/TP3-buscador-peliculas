import React from 'react'
// import '../estilos/General.css'
import Categoria from './Categoria'
import Pelicula from './Pelicula'

const Seccion =()=>{

    return (
        <>
        <div class="container mt-3">
        <Categoria />
        <div class="media-scroller media-scroller--with-groups snaps-inline scrollable-element"> 
        <div className="media-group"> 
            <Pelicula />
            <Pelicula />
            <Pelicula />
            <Pelicula />
            <Pelicula />
        </div>
        <div className="media-group"> 
            <Pelicula />
            <Pelicula />
            <Pelicula />
            <Pelicula />
            <Pelicula />
        </div>
        </div>
        </div>
        </>

    );
    
}

export default Seccion;