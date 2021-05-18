import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
//import datajson from '../Data/Data'
import { getProducts } from '../services/postService'

export default function ItemListContainer({ greeting, onAdd }) {

    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => setData(result))
    }, [])


    return (
        <div>
            <div className="div-ofertas">
                <p className="texto-ofertas">{greeting} CONOCE NUESTRAS OFERTAS DE LA SEMANA!!</p>
            </div>
            <ItemList dataInput={data} />
        </div>
    )
}


