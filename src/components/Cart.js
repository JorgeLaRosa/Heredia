import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart({ data }) {

    const { remove, finalQty, finalPrice } = useContext(CartContext)


    return (
        <>
            <ul>
                <p>Titulo: {data.title}</p>
                <p>La Cantidad es: {data.quantity}</p>
                <p>Costo: {data.price}</p>
                <button onClick={() => remove(data.id)}>Eliminar Producto</button>

            </ul>
        </>
    )
}
