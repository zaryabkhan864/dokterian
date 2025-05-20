import mongoose from 'mongoose'
const doctorSchema = new mongoose.Schema({
    specialization:String,
    experience:Number,
    clinicAddress:String
})
export default mongoose.model('Doctor',doctorSchema)