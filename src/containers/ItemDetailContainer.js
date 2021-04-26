import React, { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import datajson from '../Data/Data'

export default function ItemDetailContainer() {

    const [items, setItems] = useState([]);

    new Promise((resolve, reject) => {
        setTimeout(() => { resolve(datajson) }, 2000)
    })

        .then(resp => setItems(resp))

    function selectedItems(obj) {
        return obj.id === "2"
    }

    const precio = items.find(selectedItems).price
    //useEffect(() , [] )

    return (
        <div>
            <ItemDetail dataDetail={precio} />
        </div>
    )
}
