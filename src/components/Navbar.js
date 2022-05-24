import React from "react";
import Buscador from "./Buscador";
import '../estilos/Navbar.css';
import '../estilos/General.css'

const Navbar =()=>{
    return ( 
        //cambiar las rutas de los href mas adelante
        //Hacer que la barra de busqueda y el boton esten al lado del otro
        <>
            <nav className="colorNavbar navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">Pelispedia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;