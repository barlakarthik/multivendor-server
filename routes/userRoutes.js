import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
const UserRouter = express.Router();
UserRouter.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})
UserRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                image: user.image,
                admin: user.isAdmin,
            })
            return;
        }
    }
    res.status(401).send({ message: "invalid credentials" })
})
UserRouter.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        address: req.body.address,
        phone: req.body.phone,
        image: req.bodyimage || "./assets/images/sellers/ja.png",
    });
    const user = await newUser.save();
    res.send({
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address,
        phone: user.phone,
        image: user.image,
        isAdmin: user.isAdmin
    })
})
UserRouter.put('/update', async (req, res) => {
    const { _id } = req.body;
    const user = await User.findById({ _id })
    if (user) {
        user.name = req.body.name || user.name,
            user.email = req.body.email || user.email,
            user.address = req.body.address || user.address,
            user.phone = req.body.phone || user.phone,
            user.image = req.body.image || user.image
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password);
        }
        const updatedUser = await user.save();
        res.send({
            name: updatedUser.name,
            email: updatedUser.email,
            password: updatedUser.password,
            address: updatedUser.address,
            phone: updatedUser.phone,
            image: updatedUser.image,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res.status(401).send({ message: "User not found" })
    }
})
export default UserRouter;