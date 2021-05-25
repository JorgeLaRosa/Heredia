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

    }, [category]);

    return (
        <div>
            <h4>Categoria seleccionada: {category} </h4>
            <ItemList dataInput={categoryItems} />
        </div>
    )
}
