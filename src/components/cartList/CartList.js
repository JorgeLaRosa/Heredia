import React, { useContext } from 'react'
import Cart from '../cart/Cart'
import { CartContext } from '../../context/CartContext'


export default function CartList() {

    const { cart } = useContext(CartContext);

    return (
        <ul className="ulCartList">
            {cart.map(i => {
                return (
                    <Cart key={i.id} data={i} />
                )
            })
            }
        </ul>
    )
}
