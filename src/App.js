import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter as Router, Route, Switch } from
  'react-router-dom'
import HomePageContainer from './containers/HomePage/HomePageContainer'
import CategoryPageContainer from './containers/SillasPage/CategoryPageContainer'
import RoperoPageContainer from './containers/RoperoPage/RoperoPageContainer'
import MesasPageContainer from './containers/MesaPage/MesasPageContainer'
import SillonesPageContainer from './containers/SillonesPage/SillonesPageContainer'
import BibliotecaPageContainer from './containers/BibliotecaPage/BibliotecaPageContainer'

// <div className="App">
//  <ItemListContainer greeting="'Hola CLIENTE'" />
//< ItemDetailContainer />
//</div>

function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePageContainer />
          <ItemListContainer />
        </Route>

        <Route path="/category/:categoria">
          <CategoryPageContainer />
        </Route>

        <Route path="/product/:productId">
          <ItemDetailContainer />
        </Route>



      </Switch>

    </Router >


  );

}

export default App;
