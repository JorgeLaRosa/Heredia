import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ data }) {

    return (
        <div className="card-product" >
            <Link to={`/product/${data.productId}`}>

                <h3 className="product-title">{data.title}</h3>

                <img src={data.image} className="picture" alt="" />

                <p className="product-price">Precio: ${data.price}</p>
            </Link>
        </div>
    )
}
