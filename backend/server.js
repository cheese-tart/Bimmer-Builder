import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './mongodb/mongo.js';
import userRouter from './routes/user.js';


dotenv.config();
const app = express();

// Cors
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
