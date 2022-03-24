const express = require('express') ;

const route = express.Router();

const {AddProduct, ShowProduct, ShowProductByID} = require('../controllers/product.controllers');

route.post('/Add',AddProduct);

route.get('/Get', ShowProduct);

route.get('/:id', ShowProductByID);


module.exports = route ;