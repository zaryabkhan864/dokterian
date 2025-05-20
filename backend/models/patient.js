import mongoose from "mongoose"
const patientSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    age:Number,
    gender:String,
    medicalHistory:[String]
})

export default mongoose.model("patient",patientSchema)