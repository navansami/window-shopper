import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRouter from './routes/productroutes.js';

dotenv.config();
connectDB();

const app = express();

// App CORS here before deploy
app.use(morgan('dev'));

app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});