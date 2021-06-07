import React, { useContext } from 'react';
import "./NavBar.css"
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


function Menu() {

    const { totalQty } = useContext(CartContext)

    return (
        <div className="nav-gral">
            <div className="nav-upper">
                <div className="searcher">
                    <input placeholder="Buscar Producto"></input>
                </div>
                <div className="div-logo">Le-Carte</div>
                <div className="div-user">
                    <p className="session-div">Iniciar Sesion</p>
                    <p className="login-div" > Registrarse</p>
                    <div className="div-cart">

                        <CartWidget />
                        {totalQty < 1 ? <p></p> : <p className="pCart">{totalQty}</p>}
                    </div>
                </div>

            </div>
            <div className="nav-lower">
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