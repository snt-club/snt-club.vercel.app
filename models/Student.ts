import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
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
  rollNo: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@skit\.ac\.in$/, "Invalid domain"],
  },

  username: String,
  password: String, // hashed
  testStatus: {
    type: String,
    enum: ["NOT_STARTED", "IN_PROGRESS", "SUBMITTED"],
    default: "NOT_STARTED",
  },

  isEmailVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
