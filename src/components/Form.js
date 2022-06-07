import React from "react";
// import '../estilos/Form.css'
import '../estilos/General.css'

const Form =()=> {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <input type="search" class="form-control estiloImput" placeholder="Search films"/>
                    <br></br>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-1">
                <button type="button" className="btn btn-primary-button btn-dark colorBoton">Search</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
        </>
    );
}

export default Form