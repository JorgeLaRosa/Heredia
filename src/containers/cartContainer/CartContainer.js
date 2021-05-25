import React, { useContext, useState } from 'react'
import CartList from '../../components/CartList'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router-dom'
import { createOrder } from '../../services/postService'
import Order from '../../components/Order'



export default function CartContainer() {
    const history = useHistory()
    const { totalQty, totalPrice, clear } = useContext(CartContext)


    return (
        <div>
            <h1>Carro de Compras</h1>
            <div>
                {totalQty < 1 ? (
                    <div>
                        <h3>No hay productos seleccionados en su carro</h3>
                    </div>
                ) : (
                    <div>
                        <CartList />
                        <h5>Cantidad Items: {totalQty}. Total ${totalPrice}</h5>
                        <button onClick={() => clear()}> Vaciar Carrito </button>
                        <button onClick={() => history.push('/order')}>PAGAR</button>
                    </div>
                )}

            </div>
            <button onClick={() => history.push('/')}>Seguir Comprando</button>




        </div>
    )
}
