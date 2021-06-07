import React, { useState, useContext } from 'react'
import { createOrder } from '../../services/postService'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './Order.css'
import firebase from 'firebase'
import 'firebase/firestore'

export default function Order() {

    const history = useHistory();
    const { clear, cart, totalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [display, setDisplay] = useState(false);
    const date = firebase.firestore.Timestamp.fromDate(new Date());

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
            date: date,
            total: totalPrice
        }
        createOrder(newOrder)
            .then(res => setOrderId(res))

        clear()
        setDisplay(true)
    }

    return (
        <> {display === false ? (
            <>
                <h2 className="lineOne">Ya casi!!</h2>
                <p className="lineTwo">Solo falta completar los siguientes campos.</p>
                <form className="orderForm">
                    <input className="orderInput" type='text' placeholder='nombre completo' onChange={(i) => nameChange(i)}></input>
                    <input className="orderInput" type="mail" placeholder='mail' onChange={(i) => mailChange(i)}></input>
                    <input className="orderInput" type="number" placeholder='phone' onChange={(i) => phoneChange(i)}></input>
                    <button className="orderInput" onClick={checkOut}>Pagar</button>
                </form>

            </>
        ) : (
            <>
                <h2 className="lineOne">GRACIAS!!</h2>
                <p className="lineTwo">Tu Compra se realizo con exito!</p>
                <div className="ticketDiv">
                    <h2 className="ticketTitle">Datos de tu compra: </h2>
                    <p className="ticketIdTitle">ID de operacion : </p>
                    <p className="ticketId">{orderId}</p>
                </div>

                <button className="keepBuyingButton" onClick={() => history.push('/')}>Seguir Comprando</button>

            </>)
        }
        </>
    )
}

