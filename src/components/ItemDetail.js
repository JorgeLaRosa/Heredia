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
    const { setNewOrder } = useContext(CartContext);

    function onAdd(number) {
        setDisplayOneValue("none")
        setDisplayTwoValue("block")
        setCantidad(number)
        setNewOrder([{ id: dataDetail.id, cantidad: number }]);

    }

    return (
        <div className="detalle-plantilla">
            <h5 className="titulo-seleccion">El producto que Seleccionado es: {dataDetail.title}</h5>
            <img src={dataDetail.picture} alt="" className="foto-detalle" />
            <ul>

                <li className="detalle-precio"> Precio: ${dataDetail.price} </li>
                <li> Descripcion: {dataDetail.descripcion} </li>

            </ul>
            <div style={{ display: displayOneValue }}>
                <ItemCount initial={1} stock={3} onAdd={onAdd} />
            </div>
            <div style={{ display: displayTwoValue }}>
                <h5>Seguro deseas comprar {cantidad} producto/s</h5>
                <button onClick={() => history.push('/cart')}>Finalizar mi compra</button>
            </div>


        </div>
    )
}
