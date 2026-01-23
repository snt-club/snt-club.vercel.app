import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true },
  otp: { type: String, required: true },
  expiresAt: {
    type: Date,
    required: true,
    index: { expireAfterSeconds: 0 }, // 🔥 AUTO DELETE
  },
});

export default mongoose.models.Otp ||
  mongoose.model("Otp", OtpSchema);
