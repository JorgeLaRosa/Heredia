import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'



export default function ItemDetail({ dataDetail }) {
    return (
        <div className="detalle-plantilla">
            <h5 className="titulo-seleccion">El producto que Seleccionado es: {dataDetail.title}</h5>
            <img src={dataDetail.picture} alt="" className="foto-detalle" />
            <ul>

                <li className="detalle-precio"> Precio: ${dataDetail.price} </li>
                <li> Descripcion: {dataDetail.descripcion} </li>

            </ul>
            <ItemCount initial={1} stock={3} />




        </div>
    )
}
