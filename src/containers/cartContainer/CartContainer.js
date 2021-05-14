import React, { useContext } from 'react'
import CartList from '../../components/CartList'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router-dom'


export default function CartContainer() {
    const history = useHistory()
    const { finalQty, finalPrice, clear } = useContext(CartContext)

    return (
        <div>
            <h1>Carro de Compras</h1>
            <div>
                {finalQty < 1 ? (
                    <div>
                        <h3>No hay productos seleccionados en su carro</h3>

                    </div>
                ) : (
                    <div>
                        <CartList />
                        <button onClick={() => clear()}> Vaciar Carrito </button>
                    </div>
                )}

            </div>
            <button onClick={() => history.push('/')}>Ir a Catalogo</button>

            <h5>Cantidad Items: {finalQty}. Total ${finalPrice}</h5>


        </div>
    )
}
