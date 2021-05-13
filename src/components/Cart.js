import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {

    const { remove, clear } = useContext(CartContext)



    return (
        <div>
            <ul>
                <h1>Cart</h1>
                <p>Su pedido es:</p>
                <p>La Cantidad es:</p>
                <button onClick={() => remove()}>Eliminar Producto</button>


            </ul>
            <button onClick={() => clear()}> Eliminar Todo </button>

        </div>
    )
}
