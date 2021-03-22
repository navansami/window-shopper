const express = require('express');
const products = require('./data/products');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// app.use(cors);
app.use(morgan('dev'));

app.get('/api/products' ,(req, res) => {
    res.json(products);
})

app.get('/api/products/:id' ,(req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})

app.listen(5000, console.log('server started on port 5000'));