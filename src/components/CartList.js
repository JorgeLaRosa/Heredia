import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../context/CartContext'


export default function CartList() {

    const { cart } = useContext(CartContext);

    console.log(cart)

    return (
        <div>

            <ul>
                {cart.map(i => {
                    return (
                        <Cart key={i.id} data={i} />
                    )
                })
                }
            </ul>
        </div>
    )
}
