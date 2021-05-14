import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    //const [newOrder, setNewOrder] = useState([]);
    const [cart, setCart] = useState([]);
    const [finalQty, setFinalQty] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0)

    function isInCart({ id, quantity, title, price }) {
        if (cart.some(i => Number(i.id) == Number(id))) {
            refreshCart({ id, quantity, title, price })
        } else {
            addCart({ id, quantity, title, price })
        }
    }


    function addCart({ id, quantity, title, price }) {
        price = price * quantity
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


    function remove(id) {
        console.log("BORRANDO")
        console.log(id)
        setCart(
            cart.filter((i) => i.id !== id)
        )
    }

    function clear() {
        setCart([])
        console.log(cart)
    }

    useEffect(() => {
        let finalQty = 0
        let finalPrice = 0
        cart.forEach(e => {
            finalQty = finalQty + e.quantity
            finalPrice = finalPrice + e.price
        })
        setFinalQty(finalQty)
        setFinalPrice(finalPrice)

    }, [cart])
    console.log(finalQty)


    return (
        <CartContext.Provider value={{ isInCart, clear, remove, cart, finalQty, finalPrice }}  >
            {children}
        </CartContext.Provider>
    )
}