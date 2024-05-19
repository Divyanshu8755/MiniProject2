import mongoose from "mongoose";

const DoctorSchema  = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
    },
    Age:{
        type:Number,
        required:true,
    },
    Experience:{
        type:String,
        required:true,
    },
    Qualification:{
        type:String,
        required:true
    },
    password:{
        type:String,
        min:8,
        max:25
    }
})

export default mongoose.model("Doc" , DoctorSchema);