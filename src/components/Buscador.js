import React from "react";
import '../estilos/Buscador.css'
// import '../estilos/General.css'


const Buscador =()=> {
    return (
        <>
        <div className="container">
            <div className="row"> 
                <div className="col-sm-12">
                    <form  className="form-inline my-2 my-lg-0">
                        <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button  className="colorBoton btn btn-primary-button my-2 my-sm-0 btn-dark" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Buscador;