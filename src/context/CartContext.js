import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    //const [newOrder, setNewOrder] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
    //const [newOrder, setNewOrder] = useState([])

    function isInCart({ id, quantity, title, price, image }) { //Acá me llega info para agregar a Cart.
        if (cart.some(i => i.id == id)) {
            uploadCart({ id, quantity, title, price, image })
        } else {
            addCart({ id, quantity, title, price, image })
        }
    }

    function addCart({ id, quantity, title, price, image }) {
        const finalPrice = price * quantity
        setCart([...cart, { id, quantity, title, price, image, finalPrice }])

    }

    function uploadCart({ id, quantity, price }) {
        cart.map(i => {
            if (i.id === id) {
                return (
                    i.quantity = i.quantity + quantity,
                    i.finalPrice = i.quantity * price
                )
            }
        })//fin del map
        setCart([...cart])
    }//fin de upload

    function remove(id) {
        setCart(
            cart.filter((i) => i.id !== id)
        )
    }

    function clear() {
        setCart([])
    }

    useEffect(() => {
        let totalAmountProducts = 0
        let totalPrice = 0
        cart.forEach(e => {
            totalAmountProducts = totalAmountProducts + e.quantity
            totalPrice = totalPrice + e.finalPrice
        })
        setTotalQty(totalAmountProducts)
        setTotalPrice(totalPrice)
        console.log("TOTAL QTY: ", totalQty)
    }, [cart])



    return (
        <CartContext.Provider value={{ isInCart, clear, remove, cart, totalQty, totalPrice }}  >
            {children}
        </CartContext.Provider>
    )
}