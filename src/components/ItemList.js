import React from 'react'
import Item from './Item'




export default function ItemList({ dataInput }) {

    return (
        <ul>
            {
                dataInput.map((data) => {
                    return (
                        <Item key={data.id} data={data} />
                    )
                })
            }

        </ul>
    )
}

