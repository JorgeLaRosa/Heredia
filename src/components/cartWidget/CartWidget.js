import React from 'react';
import cart from '../../imagenes/cart.png';
import { Link } from 'react-router-dom';
import './CartWidget.css';

export default function CartWidget() {

    return (
        <div className="cartWidgetContainer">
            <Link to={'/cart'}>
                <img src={cart} height="28" width="28" alt="" />
            </Link>
        </div>
    )
}