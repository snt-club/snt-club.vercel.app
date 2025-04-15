import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  id: { type: String, required: true },
  year: { type: String, required: true },
  branch: { type: String, required: true },
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
