import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import UserRouter from './routes/userRoutes.js';
import ProductRouter from './routes/productRoutes.js';
import CategoryRouter from './routes/categoryRoutes.js';
const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>hello world</h1>')
// })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/seed', seedRouter);
app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/categories', CategoryRouter);
app.use('/api/user', UserRouter);
//connected with DB.....
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to DB')
}).catch((error) => {
    console.log(error.message)
})

//create port.....
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server lisetning at http://localhost:${port}`)
})

