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
                <div className="div-logo">Le-Carte LOGO</div>
                <div className="div-usuario">
                    <p className="inicia-sesion-div">Iniciar Sesion</p>
                    <p className="registrarse-div" > Registrarse</p>
                </div>
            </div>
            <div className="nav-inferior">
                <div className="pestanas">
                    <ul className="ul-pestanas">

                        <li className="pestanas">Sillones</li>
                        <li className="pestanas">Mesas</li>
                        <li className="pestanas">Bibliotecas</li>
                        <li className="pestanas">Roperos</li>
                        <li className="pestanas">Sillas</li>
                    </ul>

                </div>
            </div>
            <div className="sesion"></div>

        </div>
    )
}

export default Menu