import mongoose from "mongoose";

const EmailJobSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["OTP", "REGISTRATION"],
      required: true,
    },
    payload: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "SENT", "FAILED"],
      default: "PENDING",
    },
    retries: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// 🔥 Auto-delete after 1 hour
EmailJobSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
);

export default mongoose.models.EmailJob ||
  mongoose.model("EmailJob", EmailJobSchema);
