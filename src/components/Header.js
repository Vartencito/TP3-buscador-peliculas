import React from "react";
import Navbar from "./Navbar";
import Buscador from "./Buscador";
import '../estilos/General.css'

const Header =()=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <Navbar />
                </div>
                <div className="col-md-2">
                    <Buscador />
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;