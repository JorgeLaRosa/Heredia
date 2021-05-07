import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailPage/ItemDetailContainer'
import { BrowserRouter as Router, Route, Switch } from
    'react-router-dom'
import HomePageContainer from './containers/HomePage/HomePageContainer'
import CategoryPageContainer from './containers/CategoryPage/CategoryPageContainer'
import Cart from './components/Cart'


function AppRouter() {
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

                <Route path='/cart'>
                    <Cart />
                </Route>

            </Switch>
        </Router >
    );

}

export default AppRouter;