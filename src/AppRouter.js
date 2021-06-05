import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailPage/ItemDetailContainer'
import { BrowserRouter as Router, Route, Switch } from
    'react-router-dom'
import HomePageContainer from './containers/HomePage/HomePageContainer'
import CategoryPageContainer from './containers/CategoryPage/CategoryPageContainer'
import CartContainer from './containers/cartContainer/CartContainer'
import Order from './components/Order/Order'


function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>

                <Route exact path="/">
                    <ItemListContainer />
                </Route>

                <Route path="/category/:category">
                    <CategoryPageContainer />
                </Route>

                <Route path="/product/:productId">
                    <ItemDetailContainer />
                </Route>

                <Route path='/cart'>
                    <CartContainer />
                </Route>

                <Route path='/order'>
                    <Order />
                </Route>

            </Switch>
        </Router >
    );

}

export default AppRouter;