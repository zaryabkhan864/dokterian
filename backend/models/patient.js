import mongoose from 'mongoose';

const patientProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  age: Number,
  gender: { type: String, enum: ['male', 'female', 'other'] },
  address: String,
  medicalHistory: [String],
});


export default mongoose.model('PatientProfile', patientProfileSchema);