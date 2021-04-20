import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCountContainer from './containers/ItemCountContainer'


function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting="'Hola CLIENTE'" />
      <div className='caja-contador'>
        <ItemCountContainer stock="6" />


      </div>
    </div>
  );

}

export default App;
