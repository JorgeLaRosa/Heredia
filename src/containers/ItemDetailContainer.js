import React, { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import datajson from '../Data/Data'

export default function ItemDetailContainer() {

    const [items, setItems] = useState([]);

    new Promise((resolve, reject) => {
        setTimeout(() => { resolve(datajson) }, 2000)
    })

        .then(respuesta => setItems(respuesta.find(obj => { return obj.id = "2" })))



    return (
        <div>
            <ItemDetail dataDetail={items} />
        </div>
    )
}
