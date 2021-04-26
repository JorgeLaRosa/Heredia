import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="'Hola CLIENTE'" />

      < ItemDetailContainer />
    </div>
  );

}

export default App;
