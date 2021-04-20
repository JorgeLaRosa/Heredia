import React from 'react';
import './ItemListContainer.css'
import ItemCount from './ItemCount'



export default function ItemListContainer(props) {

    return (
        <div className="div-ofertas">
            <p className="texto-ofertas">{props.greeting} CONOCE NUESTRAS OFERTAS DE LA SEMANA!!</p>


        </div>

    )



}