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
export default UserRouter;