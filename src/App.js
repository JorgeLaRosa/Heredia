import React from 'react';
import AppRouter from './AppRouter';
import CartContextProvider from './context/CartContext'

function App() {
  return (
    <div>

      <CartContextProvider>
        < AppRouter />
      </CartContextProvider>

    </div>



  );

}

export default App;
