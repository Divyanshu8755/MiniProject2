import mongoose from "mongoose";

const NgoSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    Adress:{
        type:String,
        required:true,
        trim:true,
    },
    Pincode:{
        type:Number,
        required:true,

    },
    image:{
        type:String,
    }
})



export default  mongoose.model("Ngo" , NgoSchema);