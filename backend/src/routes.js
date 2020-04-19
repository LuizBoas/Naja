const express = require('express');
const connection = require('./database/connection');

const UsersControllers = require('./controllers/UsersControllers')
const ProductsControllers = require('./controllers/ProductsControllers')

const routes = express.Router();

routes.post('/users', UsersControllers.saveAuthorization);
routes.get('/users', UsersControllers.index);

routes.post('/products', ProductsControllers.create);
routes.get('/products', ProductsControllers.index);
routes.get('/products/:id', ProductsControllers.getSingle);
routes.delete('/products/:id', ProductsControllers.delete);
routes.put('/products/:id', ProductsControllers.putAmount);

module.exports = routes;