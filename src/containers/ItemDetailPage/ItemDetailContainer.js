import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
//import datajson from '../../Data/Data'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../services/postService'


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId)
            .then(i => setItem(i))
    }, [productId]);

    return (
        <>
            {item && (
                <div>
                    <ItemDetail dataDetail={item[0]} />
                </div>
            )}
        </>
    )
}
