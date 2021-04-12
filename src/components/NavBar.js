import React from 'react';
import "./NavBar.css"
//import { Divider, Grid } from '@material-ui/core'


function Menu() {

    return (

        <div className="nav-gral">
            <div className="nav-superior">
                <div className="buscador">
                    <input placeholder="Buscar Producto"></input>
                </div>
                <div className="div-logo"></div>
                <div className="div-usuario">
                    <p className="inicia-sesion-div"><a href="#"> Iniciar Sesion </a></p>
                    <p className="registrarse-div" > <a href="#">Registrarse </a></p>
                </div>
            </div>
            <div className="nav-inferior">
                <div className="pestanas">
                    <ul className="ul-pestanas">

                        <li className="pestanas"><a href="#">Sillones</a></li>
                        <li className="pestanas"><a href="#">Mesas</a></li>
                        <li className="pestanas"><a href="#">Bibliotecas</a></li>
                        <li className="pestanas"><a href="#">Roperos</a></li>
                        <li className="pestanas"><a href="#">Sillas</a></li>
                    </ul>

                </div>
            </div>
            <div className="sesion"></div>

        </div>
    )
}

export default Menu