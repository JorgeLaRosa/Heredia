import React, { useState, useEffect } from 'react';
import ItemCount from '../components/ItemCount'

export default function ItemCountContainer({ restar, sumar, stock }) {

    const [number, setNumber] = useState(1)




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

            <ItemCount sumar={sumar} restar={restar} number={number} />


        </div>

    )
}