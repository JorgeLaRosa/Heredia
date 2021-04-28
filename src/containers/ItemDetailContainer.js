import React, { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import datajson from '../Data/Data'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const [items, setItems] = useState([]);
    const { productId } = useParams();

    useEffect(() => {

        new Promise((resolve, reject) => {
            setTimeout(() => { resolve(datajson) }, 2000)
        })

            .then(respuesta => setItems(respuesta.find(obj => { return obj.id === productId })))


    }, [productId]);

    return (
        <div>
            El id es: {productId}
            <ItemDetail dataDetail={items} />
        </div>
    )
}
