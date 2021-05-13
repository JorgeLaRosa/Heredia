import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    //const [newOrder, setNewOrder] = useState([]);
    const [cart, setCart] = useState([]);

    function isInCart({ id, quantity, title, price }) {
        if (cart.some(i => Number(i.id) === id)) {
            refreshCart({ id, quantity, title, price })
        } else {
            addCart({ id, quantity, title, price })
        }
    }


    function addCart({ id, quantity, title, price }) {
        setCart([...cart, { id, quantity, title, price }])

    }

    function refreshCart({ id, quantity, title, price }) {

        cart.map(i => {
            if (i.id === id) {
                return (
                    i.quantity = i.quantity + quantity
                )
            }
        })//fin del map

        setCart([...cart])
    }//fin de refresh

    console.log(cart)


    function remove({ id }) {

        setCart(
            cart.filter(i => i.id !== id)
        )
    }

    function clear() {
        setCart([])
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ isInCart, clear, remove, cart }}  >
            {children}
        </CartContext.Provider>
    )
}