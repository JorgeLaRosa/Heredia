import React, { useState, useEffect } from 'react'
import datajson from '../../Data/Data'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'


export default function CategoryPageContainer() {

    const { categoria } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datajson)
            }, 2000)
        })

            .then(resp => setCategory(resp.filter(filtro => { return filtro.categoria === categoria })))
    }, [categoria]);

    return (
        <div>
            HOLA! Categoria seleccionada: {categoria}
            <ItemList dataInput={category} />
        </div>
    )
}
