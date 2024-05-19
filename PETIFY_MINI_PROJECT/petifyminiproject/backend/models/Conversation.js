import mongoose from "mongoose";

const conversation_schema=new mongoose.Schema({
    members:{
        type:Array
    }
},{timestamps:true})

// const conversation= 
export default mongoose.model("Consversation",conversation_schema)