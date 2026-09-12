import mongoose from "mongoose";

const AnnouncementLogSchema = new mongoose.Schema(
  {
    announcementId: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

AnnouncementLogSchema.index({ announcementId: 1, email: 1 }, { unique: true });

export default mongoose.models.AnnouncementLog ||
  mongoose.model("AnnouncementLog", AnnouncementLogSchema);
