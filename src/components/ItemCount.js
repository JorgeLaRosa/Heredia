import React from 'react';
import './ItemCount.css';


export default function ItemCount({ sumar, restar, number }) {

    return (

        <div>
            <div className="caja-producto"> MESA PARAISO</div>
            <div className="bloque-inferior">
                <button onClick={restar}>-</button>
                <div className="caja-numero">{number}</div>
                <button onClick={sumar}>+</button>
            </div>


        </div>
    )
}
