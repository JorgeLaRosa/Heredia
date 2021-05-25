import React, { useState, useEffect, useContext } from 'react'
import { createOrder } from '../services/postService'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Order() {

    const history = useHistory();
    const { clear, cart, totalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [dataBaseOrder, setDataBaseOrder] = useState("");
    const [display, setDisplay] = useState(false);


    function nameChange(i) {
        setName(i.target.value)
    }
    function phoneChange(i) {
        setPhone(i.target.value)
    }

    function mailChange(i) {
        setMail(i.target.value)
    }

    function checkOut() {
        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                mail: mail,
            },
            items: cart,
            total: totalPrice
        }
        createOrder(newOrder)
            .then(res => setOrderId(res))

        clear()
        setDisplay(true)
    }

    return (
        <> {display == false ? (
            <>
                <form>
                    <input type='text' placeholder='nombre completo' onChange={(i) => nameChange(i)}></input>
                    <input type="mail" placeholder='mail' onChange={(i) => mailChange(i)}></input>
                    <input type="number" placeholder='phone' onChange={(i) => phoneChange(i)}></input>
                </form>
                <button onClick={checkOut}>Pagar</button>
            </>
        ) : (


            <div>
                <h4>GRACIAS!! Su Compra se realizo con exito! </h4>
                <p>Datos de tu compra:</p>
                <p>{dataBaseOrder}</p>
                <p>Numero de Orden: {orderId}</p>


                <button onClick={() => history.push('/')}>Seguir Comprando</button>
            </div>)

        }
        </>
    )
}

