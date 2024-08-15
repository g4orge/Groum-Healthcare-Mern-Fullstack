import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
    role: { type: String, enum: ['User', 'Admin', 'Doctor'], default: 'User' },
    photo: { type: String },
    bookings: [{ type: mongoose.Types.ObjectId, ref: "Booking" }],
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
