import React from 'react'
import './Item.css'
import ItemCount from './ItemCount'

export default function Item({ data }) {
    return (
        <div className="plantilla-producto">

            <h3 className="producto-title">{data.title}</h3>
            <p> Codigo: {data.id}</p>
            <p>{data.descripcion}</p>
            <p className="producto-price">Precio: ${data.price}</p>
            <img src={data.picture} className="picture" />
            <ItemCount stock={6} initial={1} />

        </div>
    )
}
