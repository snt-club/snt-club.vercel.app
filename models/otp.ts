import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true, lowercase: true, trim: true },
    // Which event this OTP is for, so a code for one event can't verify another
    event: { type: String, required: true, index: true, trim: true },
    otp: { type: String, required: true }, // hashed
    expiresAt: {
      type: Date,
      required: true,
      index: { expireAfterSeconds: 0 }, // auto-delete when expired
    },
  },
  { timestamps: true } // adds createdAt (needed by the rate limiter)
);

export default mongoose.models.Otp ||
  mongoose.model("Otp", OtpSchema);