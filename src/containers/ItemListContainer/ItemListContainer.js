import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from "../../components/ItemList/ItemList"
import { getProducts } from '../../services/postService'

export default function ItemListContainer({ greeting }) {

    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => setData(result))
    }, [])


    return (
        <div>
            <div className="div-ofertas">
                <p className="texto-ofertas">CONOCE NUESTRAS OFERTAS DE LA SEMANA!!</p>
            </div>
            <h3 className="catalogueTitle">Catalogo:</h3>
            <div className="catalogueBox">
                <ItemList dataInput={data} />
            </div>
        </div>
    )
}


