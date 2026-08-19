import mongoose, { Schema } from "mongoose";

const EventRegistrationSchema = new Schema(
  {
    // Which event this registration belongs to, e.g. "aarambh"
    event: { type: String, required: true, index: true, trim: true },

    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^[a-zA-Z0-9._%+-]+@(gmail\.com|skit\.ac\.in)$/, "Invalid domain"],
    },
    rollNo: { type: String, required: true, trim: true },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[6-9]\d{9}$/, "Invalid phone number"],
    },
    branch: {
      type: String,
      enum: ["CSE", "DS", "AI", "IT", "IOT"],
      required: true,
    },
    year: {
      type: Number,
      enum: [1, 2, 3, 4],
      required: true,
    },
  },
  { timestamps: true }
);

// A student can register once per event (not once globally)
EventRegistrationSchema.index({ event: 1, email: 1 }, { unique: true });
EventRegistrationSchema.index({ event: 1, rollNo: 1 }, { unique: true });

export default mongoose.models.EventRegistration ||
  mongoose.model("EventRegistration", EventRegistrationSchema);
