import express from 'express';
import data from '../data.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
const seedRouter = express.Router();
//seed data into DB...
seedRouter.get('/', async (req, res) => {
    await User.deleteOne({});
    const createdUser = await User.insertMany(data.users)

    await Product.deleteOne({});
    const createdProduct = await Product.insertMany(data.products)

    await Category.deleteOne({})
    const createdCategory = await Category.insertMany(data.cateories)

    res.send({ createdUser, createdProduct, createdCategory })
})
export default seedRouter;