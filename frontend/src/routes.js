import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Update from './pages/Update';

import { isAuthenticated } from './services/auth';

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

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />

                <PrivateRoute path="/products" exact component={ Products } />
                <PrivateRoute path="/products/new" exact component={ Register } />
                <PrivateRoute path="/products/:id" component={ Update } />
            </Switch>
        </BrowserRouter>
    );
}
*/