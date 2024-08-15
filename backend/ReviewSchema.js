import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    doctor: { type: mongoose.Types.ObjectId, ref: "Doctor", required: true },
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", ReviewSchema);
