import express from 'express';
import User from '../models/UserModel.js';

const router = express.Router();

// Create a new user or return existing user info
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

// Get all parts saved by user
router.get("/:uid/part", async function (req, res) {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        };

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        res.status(200).json(user.parts);
    } catch (error) {
        console.error("Error getting user parts: ", error.message);
        res.status(500).json("Server error: " + error.message);
    }
});

// Add a part to user's saved parts
router.post("/:uid/part", async function (req, res) {
    try {
        const { userId, partId } = req.body;
        if (!userId || !partId) {
            return res.status(400).json({ message: "User ID and Part ID are required" });
        };

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        if (user.parts.includes(partId)) {
            return res.status(400).json({ message: "Part already added to user" });
        };

        user.parts.push(partId);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error("Error adding part to user: ", error.message);
        res.status(500).json("Server error: " + error.message);
    }
});

// Remove a part from user's saved parts
router.delete("/:uid/part/:pid", async function (req, res) {
    try {
        const { userId, partId } = req.body;
        if (!userId || !partId) {
            return res.status(400).json({ message: "User ID and Part ID are required" });
        };

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        if (!user.parts.includes(partId)) {
            return res.status(400).json({ message: "Part not found in user's saved parts" });
        };

        user.parts = user.parts.filter(id => id.toString() !== partId);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error("Error removing part from user: ", error.message);
        res.status(500).json("Server error: " + error.message);
    }
});

export default router;
