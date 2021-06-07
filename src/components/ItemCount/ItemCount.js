import React, { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {

    const [number, setNumber] = useState(initial)

    function sumar() {
        if (stock > number) {
            setNumber(number + 1)
        } else {
            alert(`Stock disponible para este producto: ${stock}`)
        }
    }

    function restar() {
        if (number > 1) {
            setNumber(number - 1)
        }
    }

    return (

        <div className="counterBox">
            <div className="lower-block">
                <button onClick={restar}>-</button>
                <div className="box-number">{number}</div>
                <button onClick={sumar}>+</button>
            </div>
            <button className="add-button" onClick={() => onAdd(number)} >Agregar al carrito </button>
        </div>
    )
}