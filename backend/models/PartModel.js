import mongoose from 'mongoose';

const partSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Company name, model name, etc.
    category: { type: String, required: true }, // Turbo, exhaust, suspension, etc.
    link: { type: String, required: true }, // Link to product page
    image: { type: String, required: true }, // Link to image
    compatability: {
            model: { type: String, required: true }, // Car model
            gen: { type: String, required: true }, // Generation
    }
});

const Part = mongoose.model("Part", partSchema);

export default Part;
