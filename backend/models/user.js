import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        role:{type:String,required:true,enum:['doctor','patient']},
        profile:{type:mongoose.Schema.Types.ObjectId,refPath:'roleProfile'},

        roleProfile:{type:String,required:true,enum:['Doctor','Patient']}

    }
)
export default mongoose.model("User",userSchema)