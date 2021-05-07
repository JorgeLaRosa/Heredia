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
        <div>

            <div>
                <div className="bloque-inferior">
                    <button onClick={restar}>-</button>
                    <div className="caja-numero">{number}</div>
                    <button onClick={sumar}>+</button>
                </div>
                <button className="boton-agregar" onClick={() => onAdd(number)} >Agregar al carrito </button>

            </div>
        </div>

    )
}