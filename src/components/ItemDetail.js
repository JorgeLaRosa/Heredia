import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export default function ItemDetail({ dataDetail }) {


    const history = useHistory();
    const [cantidad, setCantidad] = useState(0);
    const [displayOneValue, setDisplayOneValue] = useState("block");
    const [displayTwoValue, setDisplayTwoValue] = useState("none")
    const { isInCart } = useContext(CartContext);

    function onAdd(number) {
        setDisplayOneValue("none")
        setDisplayTwoValue("block")
        setCantidad(number)
        var id = dataDetail.productId
        var quantity = number
        var title = dataDetail.title
        var price = dataDetail.price
        isInCart({ id, quantity, title, price });

    }

    return (
        <div className="detalle-plantilla">
            <h3 className="titulo-seleccion">{dataDetail.title}</h3>
            <img src={dataDetail.image} alt="" className="foto-detalle" />
            <ul>

                <li className="detalle-precio"> Precio: ${dataDetail.price} </li>
                <li> Descripcion: {dataDetail.descripcion} </li>

            </ul>
            <div style={{ display: displayOneValue }}>
                <ItemCount initial={1} stock={3} onAdd={onAdd} />
            </div>
            <div style={{ display: displayTwoValue }}>
                <h5>Seguro deseas comprar {cantidad} producto/s</h5>
                <button onClick={() => history.push('/cart')}>Proceder a la compra</button>
            </div>


        </div>
    )
}
