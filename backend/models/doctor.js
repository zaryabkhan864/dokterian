import mongoose from 'mongoose';

const doctorProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  specialization: { type: String, required: true },
  experience: { type: Number }, // in years
  location: { type: String, required: true },
  qualifications: [String],
  bio: { type: String },
  availableTimes: [
    {
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
});


export default mongoose.model('DoctorProfile', doctorProfileSchema);