import express from 'express';
import Category from '../models/categoryModel.js';
const CategoryRouter = express.Router();
CategoryRouter.get('/', async (req, res) => {
    const categories = await Category.find()
    res.send(categories)
})
export default CategoryRouter;