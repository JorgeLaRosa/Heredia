import { useState, createContext } from 'react';

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {

    const [prueba, setPrueba] = useState("")

    function ejecutar() {
        console.log({ prueba })
    }

    return (
        <CartContext.Provider value={{ setPrueba }}  >
            {children}
        </CartContext.Provider>
    )
}



