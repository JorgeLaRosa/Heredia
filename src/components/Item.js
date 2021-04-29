import React from 'react'
import './Item.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

export default function Item({ data }) {
    return (
        <div className="plantilla-producto" >
            <Link to={`/product/${data.id}`}>
                <h3 className="producto-title">{data.title}</h3>
                <img src={data.picture} className="picture" alt="" />
                <div classname="detalle-div">
                    <p> Codigo: {data.id}</p>
                    <p>{data.descripcion}</p>
                    <p className="producto-price">Precio: ${data.price}</p>
                </div>
                <ItemCount stock={6} initial={1} />
            </Link>
        </div>
    )
}
