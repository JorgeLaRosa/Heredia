import React, { useContext } from 'react';
import cart from '../imagenes/cart.png'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


export default function CartWidget() {
    const { totalQty } = useContext(CartContext)



    return (

        <div>

            <Link to={'/cart'}>
                <img src={cart} height="28" width="28" alt="" />
                {totalQty < 1 ? <p></p> : <p>{totalQty}</p>}
            </Link>

        </div>
    )
}