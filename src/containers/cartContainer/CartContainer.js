import React, { useContext, useState } from 'react'
import CartList from '../../components/cartList/CartList'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router-dom'
import './CartContainer.css'

export default function CartContainer() {
    const history = useHistory()
    const { totalQty, totalPrice, clear } = useContext(CartContext)

    return (
        <div>
            <h1 className="cartPageTitle">Carro de Compras</h1>
            <>
                {totalQty < 1 ?
                    (
                        <p className="lineTwoCart">No hay productos seleccionados en su carro</p>

                    ) : (
                        <>
                            <CartList />
                            <h5 className="totalCart">Cantidad Items: {totalQty}. Total ${totalPrice}</h5>
                            <button className="clearButton" onClick={() => clear()}> Vaciar Carrito </button>
                            <button className="payButton" onClick={() => history.push('/order')}>PAGAR</button>
                        </>
                    )}
            </>
            <button className="keepBuyingButton" onClick={() => history.push('/')}>Seguir Comprando</button>
        </div>
    )
}
