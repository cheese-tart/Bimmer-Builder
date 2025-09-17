import express from 'express';
import User from '../models/UserModel.js';

const router = express.Router();

router.post("/", async function (req, res) {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        };

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(200).json(existUser);
        };

        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user: ", error.message);
        res.status(500).json("Server error: " + error.message);
    }
});

export default router;
