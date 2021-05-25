import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    //const [newOrder, setNewOrder] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
    //const [newOrder, setNewOrder] = useState([])

    function isInCart({ id, quantity, title, price }) { //Acá me llega info para agregar a Cart.
        if (cart.some(i => i.id == id)) {
            console.log(id)//check debug
            refreshCart({ id, quantity, title, price })
        } else {
            addCart({ id, quantity, title, price })
        }
    }

    console.log("El cart es: ", cart)

    function addCart({ id, quantity, title, price }) {
        price = price * quantity
        setCart([...cart, { id, quantity, title, price }])

    }

    function refreshCart({ id, quantity, title, price }) {
        cart.map(i => {
            if (i.id === id) {
                return (
                    i.quantity = i.quantity + quantity,
                    i.price = i.quantity * price
                )
            }
        })//fin del map
        setCart([...cart])
    }//fin de refresh

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
        let totalAmountProducts = 0
        let totalPrice = 0
        cart.forEach(e => {
            totalAmountProducts = totalAmountProducts + e.quantity
            totalPrice = totalPrice + e.price
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