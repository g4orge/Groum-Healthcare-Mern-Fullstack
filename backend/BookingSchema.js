import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    doctor: { type: mongoose.Types.ObjectId, ref: "Doctor", required: true },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
    ticketPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", BookingSchema);
