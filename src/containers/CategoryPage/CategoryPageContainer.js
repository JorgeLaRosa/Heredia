import React, { useState, useEffect } from 'react'
import datajson from '../../Data/Data'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../services/postService'


export default function CategoryPageContainer() {

    const { category } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {

        getProductsByCategory(category)
            .then(i => setCategoryItems(i))
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(datajson)
        //     }, 2000)
        // })

        //     .then(resp => setCategory(resp.filter(filtro => { return filtro.categoria === categoria })))
    }, [category]);

    return (
        <div>
            HOLA! Categoria seleccionada: {category}
            <ItemList dataInput={categoryItems} />
        </div>
    )
}
