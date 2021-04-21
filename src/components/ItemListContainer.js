import React from 'react';
import './ItemListContainer.css'
import ItemCount from './ItemCount'




export default function ItemListContainer({ greeting, onAdd }) {

    function onAdd() {
        console.log("Agregado al carrito: ")
    }

    return (
        <div>
            <div className="div-ofertas">
                <p className="texto-ofertas">{greeting} CONOCE NUESTRAS OFERTAS DE LA SEMANA!!</p>


            </div>
            <ItemCount stock={6} initial={1} onAdd={onAdd} />

        </div>
    )
}

