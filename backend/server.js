import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import products from './data/products.js';

dotenv.config();

const app = express();

// App CORS here before deploy
app.use(morgan('dev'));

app.get('/api/products' ,(req, res) => {
    res.json(products);
})

app.get('/api/products/:id' ,(req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
});