import React from 'react'
import Item from "../item/Item"
import './ItemList.css'

export default function ItemList({ dataInput }) {

    return (
        <div >
            <ul className="catalogueUlBox" >
                {dataInput.map((data) => {
                    return (
                        <Item className="ItemList-Item" key={data.id} data={data} />
                    )
                })
                }
            </ul>
        </div>

    )
}

