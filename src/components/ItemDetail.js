import React from 'react'
import ItemCount from './ItemCount'



export default function ItemDetail({ dataDetail }) {
    return (
        <div>
            El producto que Seleccionado es:
            <ul>
                <li>  Titulo: {dataDetail.title} </li>
                <li> Precio:{dataDetail.price} </li>
                <li> Descripcion: {dataDetail.descripcion} </li>
                <img src={dataDetail.picture} />
            </ul>

            <ItemCount initial={1} stock={3} />


        </div>
    )
}
