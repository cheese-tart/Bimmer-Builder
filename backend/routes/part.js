import express from 'express';
import Part from '../models/PartModel.js';

const router = express.Router();

router.get("/", async function (req, res) {
    try {
        const { model, gen } = req.body;
        if (!model || !gen) {
            return res.status(400).json({ message: "Model and generation are required" });
        };

        
    } catch (error) {
        console.error("Error getting parts: ", error.message);
        res.status(500).json("Server error: " + error.message);
    }
});

export default router;
