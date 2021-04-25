import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import datajson from '../Data/Data'




export default function ItemListContainer({ greeting, onAdd }) {

    const [data, setData] = useState([])

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datajson);
        }, 2000)

    })

        .then(response => setData(response))


    function onAdd(number) {
        console.log("Agregar al carrito")
    }

    return (
        <div>
            <div className="div-ofertas">
                <p className="texto-ofertas">{greeting} CONOCE NUESTRAS OFERTAS DE LA SEMANA!!</p>
            </div>

            <ItemList dataInput={data} />
        </div>
    )
}

