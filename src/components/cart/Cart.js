import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

export default function Cart({ data }) {

    const { remove } = useContext(CartContext)
    console.log(data)

    return (
        <div className="cartBox">
            <img src={data.image} className="picture" alt="" />
            <div className="data">
                <p className="cartTitle" >{data.title}</p>
                <p>Cantidad: {data.quantity}</p>
                <p>Precio Unitario: {data.price}</p>
                <p>Total: ${data.finalPrice}</p>
                <button className="removeButton" onClick={() => remove(data.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}
