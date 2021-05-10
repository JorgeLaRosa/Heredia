import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [newOrder, setNewOrder] = useState([])
    const [order, setOrder] = useState([])

    useEffect((order, newOrder) => {
        const check = (order, newOrder) => {
            if (order.some((i) => i.id == newOrder[0].id)) {
                console.log("dos gotas de agua")
                //Si Está, Mapeo order y le agrego cantidad actual

            } else {
                //setOrder([{ id: newId, Quantity: newQuantity }])
                console.log("Se carga ORDER")

            }
        }
    }, [newOrder])



    //                 order.map((e) => {

    //                     if (e.id == newId) {
    //                         return (
    //                             e.cantidad = e.cantidad + newOrder.cantidad,
    //                             //setOrder({ id: e.id, cantidad: e.cantidad }),
    //                             console.log(`la nueva cant:  ${e.cantidad}`)
    //                         )
    //                     }
    //                 })

    //         } else {
    //             return (
    //                 setOrder({ id: newOrder.id, cantidad: newOrder.cantidad })
    //             )
    //         }
    //}//llave de check




    function remove() {
    }

    function clear() {
        setOrder([])
    }

    return (
        <CartContext.Provider value={{ setNewOrder }}  >
            {children}
        </CartContext.Provider>
    )
}