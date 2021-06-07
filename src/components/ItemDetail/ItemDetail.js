import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export default function ItemDetail({ dataDetail }) {

    const history = useHistory();
    const [cantidad, setCantidad] = useState(0);
    const [displayOneValue, setDisplayOneValue] = useState(true);
    const { isInCart } = useContext(CartContext);

    function onAdd(number) {
        setDisplayOneValue(false)
        setCantidad(number)
        var image = dataDetail.image;
        var id = dataDetail.productId;
        var quantity = number;
        var title = dataDetail.title;
        var price = dataDetail.price;

        isInCart({ id, quantity, title, price, image });
    }


    return (
        <div className="card-detail">
            <h3 className="title-selection">{dataDetail.title}</h3>

            <img src={dataDetail.image} alt="" className="picture-detail" />

            <ul>
                <li>Descripción: {dataDetail.description} </li>
                <li>Envio: Podes convenir el envio o retiro en tienda luego de efectuar tu compra.</li>
                <li className="price-detail"> Precio: ${dataDetail.price} </li>
            </ul>

            <> { displayOneValue === true ?
                (
                    <div className="counterBox">
                        <ItemCount initial={1} stock={dataDetail.stock} onAdd={onAdd} />
                    </div>
                ) : (
                    <div>
                        <h5>Producto/s agregado con exito al carrito.</h5>
                        <button className="buyButton" onClick={() => history.push('/cart')}>Ir a carro de compras</button>
                        <button className="buyButton" onClick={() => history.push("/")}> Seguir comprando</button>
                    </div>
                )}
            </>
        </div>
    )
}
