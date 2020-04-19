import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Update from './pages/Update';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />

                <Route path="/products" exact component={ Products } />
                <Route path="/products/new" exact component={ Register } />
                <Route path="/products/:id" component={ Update } />
            </Switch>
        </BrowserRouter>
    );
}