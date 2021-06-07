import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../services/postService'
import './CategoryPageContainer.css'


export default function CategoryPageContainer() {

    const { category } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        getProductsByCategory(category)
            .then(i => setCategoryItems(i))

    }, [category]);

    return (
        <div>
            <h4 className="categoryTitle" >Categoria seleccionada: {category} </h4>
            <ItemList dataInput={categoryItems} />
        </div>
    )
}
