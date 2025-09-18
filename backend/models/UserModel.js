import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    parts: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Part"
            }
        ],
        default: []
    } // List of parts saved by user (add to cart function, etc.)
});

const User = mongoose.model("User", userSchema);

export default User;
