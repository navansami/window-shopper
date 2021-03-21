const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/api/products' ,(req, res) => {
    res.json(products);
})

app.get('/api/products/:id' ,(req, res) => {
    const product = products.find(p => p._id ===cd req.params.id)
    console.log("inside get by id");
    res.json(product);
})

app.listen(5000, console.log('server started on port 5000'));