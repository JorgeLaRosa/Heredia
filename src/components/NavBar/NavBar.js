import React, { useContext } from 'react';
import "./NavBar.css"
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


function Menu() {

    const { totalQty } = useContext(CartContext)

    return (

        <div className="nav-gral">
            <div className="nav-superior">
                <div className="buscador">
                    <input placeholder="Buscar Producto"></input>
                </div>
                <div className="div-logo">Le-Carte</div>
                <div className="div-usuario">
                    <p className="inicia-sesion-div">Iniciar Sesion</p>
                    <p className="registrarse-div" > Registrarse</p>
                    <div className="div-carrito">

                        <CartWidget />
                        {totalQty < 1 ? <p></p> : <p className="pCart">{totalQty}</p>}
                    </div>
                </div>

            </div>
            <div className="nav-inferior">
                <div className="pestanas">
                    <ul className="ul-pestanas">

                        <li className="pestanas">
                            <Link to="/">View All</Link>
                        </li>

                        <li className="pestanas">
                            <Link to="/category/sillon">Sillones</Link>
                        </li>

                        <li className="pestanas">
                            <Link to="/category/mesa">Mesas</Link>
                        </li>

                        <li className="pestanas">
                            <Link to="/category/biblioteca">Bibliotecas</Link>
                        </li>

                        <li className="pestanas">
                            <Link to="/category/silla">Sillas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Menu